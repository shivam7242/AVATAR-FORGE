import fetch from 'node-fetch';

const payload = {
//   "input_face": "https://storage.googleapis.com/dara-c1b52.appspot.com/daras_ai/media/8c1b1f02-5f66-11ed-a8a9-02420a0000aa/ezgif-5-4ccc215641.gif",
//   "input_audio": "../assets/chalievoice.mp3"
};

async function gooeyAPI() {
  const response = await fetch("https://api.gooey.ai/v2/Lipsync/", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + process.env["GOOEY_API_KEY"],
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(response.status);
  }

  const result = await response.json();
  console.log(response.status, result);
}

gooeyAPI();
