// JavaScript source code
    function Setup() {
    ShowTopics();
}

 var modal = UIkit.modal("#addTopicModal");
 
 $('#addForumButton').click(function () {
    modal.show();
 });

 $('#cancelThisTopicButton').click(function () {
    modal.hide();
 });


     $('#addThisTopicButton').click(function () {
         var topic = {};
         topic.title = $('#topicTitle').val();
         topic.text = $('#textArea').val();

         localStorage.setItem('topic', JSON.stringify(topic));
         modal.hide();
     });


     function GetTopics() {
         var localData = JSON.parse(localStorage.getItem('topic'));

         //var textOfTopics = "";
         //var i;
         //for (i = 0; i <= localData.length; i++) {
         //    textOfTopics += localData[i];
         //}

         console.log(localData);
         return localData;
     }

     function ShowTopics() {
          var localData = GetTopics();

          $('#showThisTitle').text(localData.title);
          $('#showThisText').text(localData.text);

          console.log();
     }
    

Setup();
