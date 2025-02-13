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
            background-color: #white;
            color: black;
            padding: 20px;
            position: fixed;
            right: 0;
            top: 0;
         }
         .nav ul {
            list-style: none;
         }
         .nav ul li {
            margin: 20px 0;
         }
         .nav ul li a {
            color: black;
            text-decoration: none;
            transition: color 0.3s ease, text-decoration 0.3s ease;
         }
         .nav ul li a:hover {
            color: #007BFF;
            text-decoration: underline;
         }
      </style>

      <nav class="nav">
         <strong>CMIS 311 ASSIGNMENT 5</strong>
         <hr>
         <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="ch1.html">Chapter 1</a></li>
         </ul>
      </nav>
   `;
   document.getElementById("nav-template").innerHTML = navHTML;
});
