async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        console.log(posts)
        createTable(posts)
    } catch(err) {
        console.log(err)
    }
}


function createTable(posts) {
    let parent = document.querySelector('#table_posts');

    for(let post of posts) {
        const line = document.createElement('tr')

        const cellUserId = document.createElement('td')
        cellUserId.innerHTML = `${post.userId}`

        const cellId = document.createElement('td')
        cellId.innerHTML = `${post.id}`

        const cellTitle = document.createElement('td')
        cellTitle.innerHTML = `${post.title}`

        line.appendChild(cellUserId)
        line.appendChild(cellId)
        line.appendChild(cellTitle)


        parent.appendChild(line)
    }
}

getPosts()


function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById('table');
    switching = true;
    dir = "asc"; 
    while (switching) {
     switching = false;
    rows = table.rows;
     for (i = 1; i < (rows.length - 1); i++) {
  
        shouldSwitch = false;

    x = rows[i].getElementsByTagName("TD")[n];
    y = rows[i + 1].getElementsByTagName("TD")[n];

        const xValue = +x.innerHTML || x.innerHTML
        const yValue = +y.innerHTML || y.innerHTML
        

    if (dir == "asc") {
        if (xValue > yValue) {
            shouldSwitch = true;
            break;
        }
     } else if (dir == "desc") {
        if (xValue < yValue) {
            shouldSwitch = true;
            break;
        }
     }}
     if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++; 
    } else {
    
        if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
        }
    }
    }}

    function search() {
        let input, filter, table, tr,  i, txtValue;
        input = document.getElementById("input");
        filter = input.value.toUpperCase();
        if(filter?.length <= 2) filter = ''

        table = document.getElementById("table");
        tr = table.getElementsByTagName("tr");
      
        for (i = 0; i < tr.length; i++) {
           let txtValue = ''
           const cells = tr[i].getElementsByTagName("td");

           for(let i = 0; i < cells.length; i++) {
            txtValue += (cells[i].textContent || cells[i].innerText) || ''
           }

          if (txtValue) {
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          } 
        }
      }
      
    