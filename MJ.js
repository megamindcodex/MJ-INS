let clearFormBox = document.querySelector(".clear-form-box")


function displayCard() { 
    clearFormBox.style.display = "flex";
 }

 function cancleBtn() {
    clearFormBox.style.display = "none";
 };


   



$(document).ready(function() {
   $("#input1").focus(function() {
      $("#input1").css("border-bottom", "2px solid black");
      $("#err-txt1").hide();
   });

   $("#input1").blur(function() {

      var input1 = $("#input1").val();
      if(input1 === "") {

      $("#input1").css("border-bottom", "2px solid red");
      $("#err-txt1").show();
      }else{ 
         $("#input1").css("border-bottom", "2px solid blue");
      }
      

      
   });



   $("#input2").focus(function() {
      $("#input2").css("border-bottom", "2px solid black");
      $("#err-txt2").hide();
   });

   $("#input2").blur(function() {

      var input2 = $("#input2").val();
      if(input2 === "") {

      $("#input2").css("border-bottom", "2px solid red");
      $("#err-txt2").show();
      }else{ 
         $("#input2").css("border-bottom", "2px solid blue");
      }
      

      
   });


   $("#input3").focus(function() {
      $("#input3").css("border-bottom", "2px solid black");
      $("#err-txt3").hide();
   });

   $("#input3").blur(function() {

      var input3= $("#input3").val();
      if(input3 === "") {

      $("#input3").css("border-bottom", "2px solid red");
      $("#err-txt3").show();
      }else{ 
         $("#input3").css("border-bottom", "2px solid blue");
      }
      

      
   });


   $("#input4").focus(function() {
      $("#input4").css("border-bottom", "2px solid black");
      $("#err-txt4").hide();
   });

   $("#input4").blur(function() {

      var input4 = $("#input4").val();
      if(input4 === "") {

      $("#input4").css("border-bottom", "2px solid red");
      $("#err-txt4").show();
      }else{ 
         $("#input4").css("border-bottom", "2px solid blue");
      }
      

      
   });


   $("#input5").focus(function() {
      $("#input5").css("border-bottom", "2px solid black");
      $("#err-txt5").hide();
   });

   $("#input5").blur(function() {

      var input5 = $("#input5").val();
      if(input5 === "") {

      $("#input5").css("border-bottom", "2px solid red");
      $("#err-txt5").show();
      }else{ 
         $("#input5").css("border-bottom", "2px solid blue");
      }
      

      
   });


   $("#input6").focus(function() {
      $("#input6").css("border-bottom", "2px solid black");
      $("#err-txt6").hide();
   });

   $("#input6").blur(function() {

      var input6 = $("#input6").val();
      if(input6 === "") {

      $("#input6").css("border-bottom", "2px solid red");
      $("#err-txt6").show();
      }else{ 
         $("#input6").css("border-bottom", "2px solid blue");
      }
      

      
   });


   $("#input7").focus(function() {
      $("#input7").css("border-bottom", "2px solid black");
      $("#err-txt7").hide();
   });

   $("#input7").blur(function() {

      var input7 = $("#input7").val();
      if(input7 === "") {

      $("#input7").css("border-bottom", "2px solid red");
      $("#err-txt7").show();
      }else{ 
         $("#input7").css("border-bottom", "2px solid blue");
      }
      

      
   });


   $("#input8").focus(function() {
      $("#input8").css("border-bottom", "2px solid black");
      $("#err-txt8").hide();
   });

   $("#input8").blur(function() {

      var input8 = $("#input8").val();
      if(input8 === "") {

      $("#input8").css("border-bottom", "2px solid red");
      $("#err-txt8").show();
      }else{ 
         $("#input8").css("border-bottom", "2px solid blue");
      }
      

      
   });


   $("#input9").focus(function() {
      $("#input9").css("border-bottom", "2px solid black");
      $("#err-txt9").hide();
   });

   $("#input9").blur(function() {

      var input9 = $("#input9").val();
      if(input9 === "") {

      $("#input9").css("border-bottom", "2px solid red");
      $("#err-txt9").show();
      }else{ 
         $("#input9").css("border-bottom", "2px solid blue");
      }
      

      
   });


   
});

 




$(document).ready(function () {
   $("#form").validate({

     rules: {
       email: {
         required: true,
         email: true
       },

       Gender: {
         required: true
       },

       How_did_you_hear_about_us: {
         required: true
       },

       Occupation: {
         required: true
       },

       Full_name: {
         required: true
       },

       Home_address: {
         required: true
       },

       Do_you_want_it_cash_or_check: {
         required: true
       },

       What_do_you_want_to_tell_us: {
         required: true
       },

       DOB: {
         required: true
       }
     },
     messages: {
       email: {
         required: "Email is required",
         email: "Please enter a valid email address"
       },
       Gender: {
         required: "Gender is required"
       },
       How_did_you_hear_about_us: {
         required: "This field is required"
       },
       Occupation: {
         required: "Occupation is required"
       },
       Full_name: {
         required: "Full name is required"
       },
       Home_address: {
         required: "Home address is required"
       },
       Do_you_want_it_cash_or_check: {
         required: "This field is required"
       },
       What_do_you_want_to_tell_us: {
         required: "This field is required"
       },
       DOB: {
         required: "DOB is required"
       }
     },
     submitHandler: function (form) {
       form.submit();
       $("#form")[0].reset();
     }
   });
 });















 