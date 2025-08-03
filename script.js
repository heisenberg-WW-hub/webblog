// Lấy danh sách repo GitHub của bạn
fetch("https://api.github.com/users/tungtran/repos")
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById("repo-list");
    list.innerHTML = "";
    data.forEach(repo => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> - ⭐ ${repo.stargazers_count}`;
      list.appendChild(li);
    });
  })
  .catch(error => {
    document.getElementById("repo-list").innerText = "Lỗi khi tải dữ liệu từ GitHub.";
    console.error("Lỗi:", error);
  });
