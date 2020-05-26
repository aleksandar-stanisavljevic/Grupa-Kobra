<?php include_once("analyticstracking.php") ?>

<?php
date_default_timezone_set('Europe/Belgrade');
$date = date("D d M Y, H:i:s");

$con = mysqli_connect("localhost", "grupakob_kobra", "kobra15042017Poland", "grupakob_grupakobra");

if(!$con){
  echo 'Not Connect To Server';
}
if(!mysqli_select_db($con, 'grupakob_grupakobra')){
  echo 'Database Not Selected';
}
if(isset($_POST['done'])){
  $Name = $_POST["username"];
  $Comment = $_POST['comment'];
  $Rating = $_POST["rating"];
  $ResultID = $_POST["resultID"];

  $sql = "INSERT INTO comments (Name, Comment, Rating, ResultID, DateTimeComment) VALUES ('$Name', '$Comment', '$Rating', '$ResultID', '$date')";
  if(!mysqli_query($con, $sql)){
    echo 'Not Inserted';
  }
}
if(isset($_POST['display'])){

  $ResultID = $_POST["resultID"];

  $result = mysqli_query($con, "SELECT * FROM comments WHERE ResultID=$ResultID ORDER BY ID ASC");

  foreach( $result as $row ){
    ?>
      <div id='showComments'>
        <div id='boxComment'>
          <p id='rating'><?php echo "Ocena ", $row['Rating'] ?></p>
          <p id='descriptionComment'><?php echo $row['Comment'] ?></p>
          <p id='author'><?php echo "- ", $row['Name'], ", " ?><span><?php echo $row['DateTimeComment'] ?></span></p>
        </div>
      </div>
    <?php
  }
}
exit();
?>
