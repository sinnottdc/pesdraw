<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Book-O-Rama search results</title>
    </head>
    <body>
        <h1>Book-O-Rama search results</h1>
        <?php
        // create short variable name
        $searchtype=$_POST['searchtype'];
        $searchterm=trim($_POST['searchterm']);
        
        if(!$searchtype || !$searchterm) {
            echo 'You have not entered search details. Please go back & try again.';
            exit;
        }
        
        if (!get_magic_quotes_gpc()){
            $searchtype = addslashes($searchtype);
            $searchterm = addslashes($searchterm);
        }
        
       @ $db = new mysqli('localhost', 'bookorama', '1234', 'books');
        
        if (mysqli_connect_errno()) {
            echo 'Error: Could not connect to database. Please try again later.';
            exit;
        }
        
        $query = "SELECT * FROM books WHERE ".$searchtype." like '%".$searchterm."%'";
        $result = $db->query($query);
        
        $num_results = $result->num_rows;
        
        echo "<p>Number of books found: ".$num_results."</p>";
        
        for ($i=0; $i <$num_results; $i++) {
            $row = $result->fetch_assoc();
            echo "<p><strong>".($i+1) .". Title: ";
            echo htmlspecialchars(stripslashes($row['title']));
            echo "</strong><br />Author: ";
            echo stripslashes($row['author']);
            echo "<br />ISBN: ";
            echo stripslashes($row['isbn']);
            echo "<br />Price: £";
            echo stripslashes($row['price']);
            echo "</p>";
        }
        
        $result->free();
        $db->close();
        
        ?>
    </body>
</html>
