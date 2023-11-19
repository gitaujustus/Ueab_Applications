
document.addEventListener('DOMContentLoaded', function () {
    const userData = sessionStorage.getItem('user');
    var StudentId=''
    if (userData) {
        const user = JSON.parse(userData);
        const CreditHoursDone=user[0].CreditsHoursDone
        const TotalCreditHours=user[0].TotalCreditHours
        const PhoneNumber=user[0].Phone
        const remainingcredits= TotalCreditHours-CreditHoursDone
        console.log("PhoneNumber= "+PhoneNumber);
        console.log("PhoneNumber = " + PhoneNumber);
        if (PhoneNumber === null) {
            console.log("PhoneNumber is null");
            document.getElementById('graduation-form').style.display = 'block';
            document.getElementById('applicationDone').style.display = 'none';
        } else {
            document.getElementById('graduation-form').style.display = 'none';
            document.getElementById('applicationDone').style.display = 'block';
            console.log("PhoneNumber is not null");
        }
        

        //if the user is not qualified
        if (remainingcredits < 40) {
            document.getElementById('graduation-form').style.display = 'block';
            document.getElementById('not-qualified-message').style.display = 'none';
           
        } else {
             const remainingHours=document.getElementById('chr')
            remainingHours.textContent= `You have ${remainingcredits}  more credits hours to do. Happy Learning`
            document.getElementById('graduation-form').style.display = 'none';
            document.getElementById('not-qualified-message').style.display = 'block';
        }
        

        const welcomeMessage = document.getElementById("welcoming-guest");
        welcomeMessage.textContent = `Welcome ${user[0].FirstName}.`;
        const emailInput = document.getElementById('your-email');
        emailInput.value = user[0].Email;
        StudentId = user[0].StudentId;
    }

    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            const menus = document.getElementById('menus');
            menus.style.display = menus.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Listen for window resize events
    window.addEventListener("resize", () => {
        const menus = document.getElementById('menus');
        // Check if the screen is larger than 860px
        if (window.innerWidth > 860) {
            menus.style.display = 'flex';
        } else {
            menus.style.display = 'none';
        }
    });

    document.getElementById('logout').addEventListener('click',()=>{
        sessionStorage.removeItem('user')
        window.location.href=('/')
    })
    document.getElementById('SubmitGraduation').addEventListener('click',()=>{

        var table1 = document.getElementById("First-semester");
                var data1 = [];
    
                for (var i = 1; i < table1.rows.length; i++) {
                    var courseCode = table1.rows[i].cells[0].querySelector("select").value;
                    var courseTitle = table1.rows[i].cells[1].querySelector("select").value;
                    var creditHours = table1.rows[i].cells[2].querySelector("select").value;
                    if (courseCode.trim() !== "" || courseTitle.trim() !== "" || creditHours.trim() !== "") {
                        data1.push({
                            courseCode: courseCode,
                            courseTitle: courseTitle,
                            creditHours: creditHours
                        });
                    };
                }
                // console.log("First Semester Courses");
                console.log(data1);

        var table2 = document.getElementById("second-semester");
                var data2 = [];
    
                for (var i = 1; i < table2.rows.length; i++) {
                    var courseCode = table2.rows[i].cells[0].querySelector("select").value;
                    var courseTitle = table2.rows[i].cells[1].querySelector("select").value;
                    var creditHours = table2.rows[i].cells[2].querySelector("select").value;
                    if (courseCode.trim() !== "" || courseTitle.trim() !== "" || creditHours.trim() !== "") {
                        data2.push({
                            courseCode: courseCode,
                            courseTitle: courseTitle,
                            creditHours: creditHours
                        });
                    };
                }
                // console.log("Second Semester Courses");
                console.log(data2);

        // var table3 = document.getElementById("Inter-semester");
        //         var data3 = [];
    
        //         for (var i = 1; i < table3.rows.length; i++) {
        //             var courseCode = table3.rows[i].cells[0].querySelector("input").value;
        //             var courseTitle = table3.rows[i].cells[1].querySelector("input").value;
        //             var creditHours = table3.rows[i].cells[2].querySelector("input").value;
        //             if (courseCode.trim() !== "" || courseTitle.trim() !== "" || creditHours.trim() !== "") {
        //                 data3.push({
        //                     courseCode: courseCode,
        //                     courseTitle: courseTitle,
        //                     creditHours: creditHours
        //                 });
        //             };
        //         }

                var table3 = document.getElementById("Inter-semester"); // Replace "yourTableId" with the actual ID of your table
                    var data3 = [];

                    for (var i = 1; i < table3.rows.length; i++) {
                        var courseCode = table3.rows[i].cells[0].querySelector("select").value;
                        var courseTitle = table3.rows[i].cells[1].querySelector("select").value;
                        var creditHours = table3.rows[i].cells[2].querySelector("select").value;

                        if (courseCode.trim() !== "" || courseTitle.trim() !== "" || creditHours.trim() !== "") {
                            data3.push({
                                courseCode: courseCode,
                                courseTitle: courseTitle,
                                creditHours: creditHours
                            });
                        }
                    }

                // console.log("Third Semester Courses");
                console.log(data3);

                const HomeAddress= document.getElementById("Home-Address").value
                const Phone= document.getElementById("phone").value
                const Email= document.getElementById("your-email").value
                const HomeAddressParent= document.getElementById("HomeAddressParents").value
                const ParentsPhone= document.getElementById("ParentsPhone").value
                const ParentsEmail= document.getElementById("parentsEmail").value

                // console.log(HomeAddress);
                // console.log(Phone);
                // console.log(HomeAddressParent);
                // console.log(Email);
                // console.log(ParentsPhone);
                // console.log(StudentId);
                if (!Email) {
                    document.getElementById('error-message').textContent = "Please Login before applying for graduation.";
                    return;
                }
                if (!Phone) {
                    document.getElementById('error-message').textContent = "Please fill in your phone number.";
                    return;
                }
                if (!HomeAddress) {
                    document.getElementById('error-message').textContent = "Please fill in your Home address.";
                    return;
                }
                if (!ParentsPhone || !ParentsEmail || !HomeAddressParent) {
                    document.getElementById('error-message').textContent = "Please fill in your Parents Details.";
                    return;
                }

                if (data1.length === 0 && data2.length === 0 && data3.length === 0) {
                    document.getElementById('error-message').textContent = "Please insert at least one course for graduation.";
                    console.log("Fala sana");
                    return;
                }

                const AllData={
                    courses: [data1,data2,data3],
                    HomeAddress: HomeAddress,
                    Email: Email,
                    HomeAddressParent: HomeAddressParent,
                    Phone: Phone,
                    ParentsPhone: ParentsPhone,
                    ParentsEmail: ParentsEmail,
                    StudentId: StudentId
                }
                console.log(AllData.courses);
                    
                fetch("http://localhost:8000/graduation",{
                    method: 'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(AllData)
                }).then((res)=>{
                    if (res.ok) {
                        document.getElementById('success-message').textContent = "Application Submitted successfully";
                    window.location.href = 'success.html';
                    }
                    else throw Error("Application Failed")
                }).catch(error =>{
                    console.log(error);
                    document.getElementById('error-message').textContent = "An error occured trying to apply for graduation";
                })
    })

});
 