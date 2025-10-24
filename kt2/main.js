const f = document.forms[0];
let tr = document.querySelector("#table tr");
let t = tr.parentElement;

f.addEventListener("submit", (e) => {
    e.preventDefault();
    let body = {};
    for (let i = 0; i < f.elements.length; i++) {
        let tag = f[i];
        if (tag.name) {
            if (tag.type === "radio" && tag.checked) {
                body[tag.name] = tag.value;
            } else if (tag.type !== "radio") {
                body[tag.name] = tag.value;
            }
        }
    }
    console.log(body);
    let html = "<tr>";
    html += `<td><img src="${body.img}" width="50" alt="${body.name}"></td>`;
    html += `<td>${body.name || ""}</td>`;
    html += `<td>${body.sort_cofee || ""}</td>`;
    html += `<td>${body.roast || ""}</td>`;
    html += `<td>${body.price || ""}</td>`;
    html += `<td>${body.descr || ""}</td>`;
    html += "</tr>"
    t.innerHTML += html;
})