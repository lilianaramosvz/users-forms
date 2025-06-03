export const getToken = async () => {
  const client_id = '858f1becc8ef48bba3781cd14e630af9';
  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get('code');

  const codeVerifier = localStorage.getItem('code_verifier');

  const clientId = client_id;
  // const redirectUri = 'https://3s83z5f3-5173.usw3.devtunnels.ms/';
  const redirectUri = 'http://127.0.0.1:3001/';
  const url = 'https://accounts.spotify.com/api/token';
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  };

  const body = await fetch(url, payload);
  const response = await body.json();

  console.log(response);

  localStorage.setItem('access_token', response.access_token);
};

//BQBj3GMGcvw-8CosY4nRDa6IjwN_OPkvcSdQoqYrcywvafYf48wrmt-4cXfcSQVj7zpYfIBwdS-CqCoghkxvCnGJrSMy8wng1rSXujvCIH-zykz-FfolidK4D7a-HOlnqX736EhZJ2Bw37tuJ8TXSlzxbFNCMeFrS-zqhvxh3FHpgFNu4lFxL1pfb54Ol-4uFwu3kWMX3jrUT0YaiRWbDNcRHKNlBkaPXf3_kwJuNlxcYfEzPNFzB-dg8N38-HIYNwA_