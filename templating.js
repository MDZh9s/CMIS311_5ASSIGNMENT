document.addEventListener("DOMContentLoaded", function () {
   const navHTML=`
      <style>
         * {
            font-family: "Roboto Flex";
            margin: 0;
            padding: 0;
            box-sizing: border-box;
         }
         .nav {
            width: 200px;
            height: 100vh;
            background-color: #333;
            color: white;
            padding: 20px;
            position: fixed;
            left: 0;
            top: 0;
         }
         .nav ul {
            list-style: none;
         }
         .nav ul li {
            margin: 20px 0;
         }
         .nav ul li a {
            color: white;
            text-decoration: none;
         }
      </style>

      <nav class="nav">
         <strong>CMIS 311 ASSIGNMENT 5</strong>
         <hr>
         <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Chapter 1</a></li>
         </ul>
      </nav>
   `;
   document.getElementById("nav-template").innerHTML = navHTML;
});
