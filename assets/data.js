function getData() {
    const data = fetch('./data.json').then(res => res.json())
    return data
  }
  
  
  async function friendListsElement() {
    const friendLists = document.getElementById("friend_list");
    const data = await getData("data.json") 
    const lists = `
      ${data.map(i => `
        <li class="grid-box">
            <div class="card" padding="4px">
              <div class="img-card">
                <img src="${i.fotoselfie}" alt="${i.nama}" width="15%" border-radius="10px">
              </div>
              <div class="card_description">
                <span> Nama : ${i.nama}</span><br>
                <span> NIM :${parseInt(i.nim)}</span><br>
                <span>TTL : ${i.ttl}</span><br>
                <span>Alamat : ${i.alamat}</span><br>
                <span>NoHP : ${i.no}</span><br>
              </div>
            </div>
        </li>
      `).join("")}
    `;
  
    return friendLists.innerHTML = lists
  }
  
  friendListsElement()