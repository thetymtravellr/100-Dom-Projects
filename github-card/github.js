
const getInput = () => {
    const input = document.getElementById('search-input');
    const inputValue = input.value;
    loadGithubUser(inputValue);
    input.value = '';
}

const loadGithubUser = async (userName) => {
    const url = `https://api.github.com/users/${userName}`;
    const res = await fetch(url);
    const data = await res.json();
    showUserCard(data);
}

const showUserCard = async (userData) => {
    const cardContainer = document.getElementById('card-container');
    console.log(userData);
    cardContainer.innerHTML = `
    <div
    class="card bg-white flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-64 mx-auto"
  >
    
    <div class="profile mx-auto rounded-full py-2 w-16">
      <img
        class="rounded-full h-16 w-16 object-cover"
        src="${userData.avatar_url}"
        alt="profile"
      />
    </div>
    <!--name-->
    <div class="name text-gray-800 text-2xl font-medium mt-4">
      <p>${userData.name}</p>
    </div>
    <!--username-->
    <div class="username text-gray-500">
      <p>${userData.login}</p>
    </div>
    <!--work-->
    <div class="work text-gray-700 mt-4">
      <p>${userData.bio}</p>
    </div>
    <!--work-->
    <div class="w-full work text-gray-700 mt-4 flex justify-around">
      <p class="text-center">Following <br/> <span class="font-bold">${userData.following}</span></p>
      <p class="text-center">Follower <br/> <span class="font-bold">${userData.followers}</span></p>
    </div>
    <!-- follow button -->
    <div class="w-full mt-8">
    <a href="${userData.html_url}">
      <button
        class="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg"
      >
        Follow
      </button>
      </a>
    </div>
  </div>
    `
}

/* 

*/