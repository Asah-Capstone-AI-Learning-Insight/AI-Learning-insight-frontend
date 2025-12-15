const BASE_URL = "http://202.10.34.29";

function getAccessToken() {
  return localStorage.getItem("accessToken");
}

function putAccessToken(accessToken) {
  return localStorage.setItem("accessToken", accessToken);
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

async function login({ username, password }) {
  const response = await fetch(`${BASE_URL}/authentications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getUserLogged() {
  const id = getUserIdFromToken();
  if (!id) return { error: true, data: null, message: "Token invalid" };
  const response = await fetchWithToken(`${BASE_URL}/users/${id}`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return {
      error: true,
      data: null,
      message: responseJson.message || "Gagal",
    };
  }

  return { error: false, data: responseJson.data.user };
}

function logout() {
  localStorage.removeItem("accessToken");
  return true;
}

function getUserIdFromToken() {
  const token = getAccessToken();
  if (!token) return null;

  const payloadPart = token.split(".")[1];
  const payloadJson = atob(payloadPart.replace(/_/g, "/"));
  const payload = JSON.parse(payloadJson);

  return payload.id;
}

async function inferModel({ input, reshape = [1, 3], inputDType = "float32" }) {
  const response = await fetchWithToken(`${BASE_URL}/api/model/infer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input, reshape, inputDType }),
  });
  const responseJson = await response.json();

  console.log(responseJson);

  if (!response.ok || responseJson.ok !== true) {
    return {
      error: true,
      data: null,
      message: responseJson.error || "Inferensi Gagal",
    };
  }

  return { error: false, data: responseJson.result, message: "" };
}

async function getDashboardSummary() {
  const response = await fetchWithToken(`${BASE_URL}/api/dashboard/summary`);

  const responseJson = await response.json();

  if (!response.ok) {
    return {
      error: true,
      data: null,
      message: responseJson.message || "Gagal ambil summary",
    };
  }
  return { error: false, data: responseJson.data };
}

async function getUserLearningInsight() {
  const response = await fetchWithToken(`${BASE_URL}/api/model/user-insight`);
  const responseJson = await response.json();

  if (!response.ok) {
    return {
      error: true,
      data: null,
      message: responseJson.message || "Gagal mengambil learning insight",
    };
  }

  return { error: false, data: responseJson, message: "" };
}

export {
  getAccessToken,
  putAccessToken,
  login,
  getUserLogged,
  logout,
  inferModel,
  getDashboardSummary,
  getUserLearningInsight,
};
