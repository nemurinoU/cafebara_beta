document.addEventListener("DOMContentLoaded",function() {
    const formElement = document.forms.login;
    let formData = new FormData(formElement);

    const owner = "owner";
    const customer = "customer";
    
    let dropdown = document.querySelector("#usertype");

    dropdown.addEventListener("change", function() {
        let usertype = dropdown.value;
        clearForm();
        changeForm(usertype);
        console.log(usertype);
    })

    function changeForm(usertype){
        if(usertype == customer){
            clearForm();
            displayCustomerRegistration();
        }
        else if(usertype == owner){
            clearForm();
        }
    }

    function clearForm(){
        document.querySelector("#inputform").innerHTML = "";
    }

    function displayCustomerRegistration(){

        const form = document.querySelector("#inputform");

        const namefield = createNameInputs();
        const bdayfield = createBirthdayInputs();
        const email = createEmailInput();
        const pass = createPasswordInput();
        const confirm = createConfirmPasswordInput();
        const submit = createSubmitbutton();


        form.appendChild(namefield);
        form.appendChild(bdayfield);
        form.appendChild(email);
        form.appendChild(pass);
        form.appendChild(confirm);
        form.appendChild(submit);
    }

    function createSubmitbutton(){
        const button = document.createElement("input");
        const div = document.createElement("div");

        button.setAttribute("type","submit");
        button.setAttribute("id","submit");
        button.setAttribute("name","submit");
        button.innerHTML = "Sign up";

        div.appendChild(button);
        div.setAttribute("id","buton");
        return div;
    }

    function createConfirmPasswordInput(){
        const pass = document.createElement("input");
        const passdiv = document.createElement("div");
        const passlabel = document.createElement("label");

        pass.setAttribute("type","password");
        pass.setAttribute("name","confirmpassword");
        pass.setAttribute("id","confirmpassword");
        pass.setAttribute("placeholder","Re-enter your password");

        passlabel.setAttribute("for","confirmpassword");
        passlabel.innerHTML = "Confirm Password";

        passdiv.setAttribute("class","singlebox");

        passdiv.appendChild(passlabel);
        passdiv.appendChild(pass);

        return passdiv;
    }

    function createPasswordInput(){
        const pass = document.createElement("input");
        const passdiv = document.createElement("div");
        const passlabel = document.createElement("label");

        pass.setAttribute("type","password");
        pass.setAttribute("name","password");
        pass.setAttribute("id","password");
        pass.setAttribute("placeholder","password12345");

        passlabel.setAttribute("for","password");
        passlabel.innerHTML = "Password";

        passdiv.setAttribute("class","singlebox");

        passdiv.appendChild(passlabel);
        passdiv.appendChild(pass);

        return passdiv;
    }

    function createEmailInput(){
        const email = document.createElement("input");
        const emaildiv = document.createElement("div");
        const emaillabel = document.createElement("label");

        email.setAttribute("type","email");
        email.setAttribute("name","email");
        email.setAttribute("id","email");
        email.setAttribute("placeholder","kk@email.com");

        emaillabel.setAttribute("for","email");
        emaillabel.innerHTML = "Email";
        emaildiv.setAttribute("class","singlebox");

        emaildiv.appendChild(emaillabel);
        emaildiv.appendChild(email);

        return emaildiv;
    }

    function createBirthdayInputs(){
        const bdaywrap = document.createElement("div");
        const firstdiv = document.createElement("div");
        const seconddiv = document.createElement("div");
        const daydiv = document.createElement("div");
        const monthdiv = document.createElement("div");
        const yeardiv = document.createElement("div");
        $(bdaywrap).addClass("longbox");
        $(seconddiv).addClass("tripleboxwrapper");
        $(daydiv).addClass("tripleboxlayer");
        $(monthdiv).addClass("tripleboxlayer");
        $(yeardiv).addClass("tripleboxlayer");

        const bdaytag = document.createElement("label");
        bdaytag.innerHTML = "When is your birthday?";
        firstdiv.appendChild(bdaytag);

        daydiv.setAttribute("id","daydiv");
        monthdiv.setAttribute("id","monthdiv");
        yeardiv.setAttribute("id","yeardiv");

        const month = document.createElement("select");
        const day = document.createElement("input");
        const year = document.createElement("input");

        const monthlabel = document.createElement("label");
        const daylabel = document.createElement("label");
        const yearlabel = document.createElement("label");

        monthlabel.innerHTML = "Month";
        daylabel.innerHTML = "Day";
        yearlabel.innerHTML = "Year";

        //This part creates the month option elements and adds to the select
        const months = createBirthMonths();
        for(let i = 0; i < months.length; i++){
            month.appendChild(months[i]);
        };

        day.setAttribute("type","text");
        day.setAttribute("id","day");
        day.setAttribute("min","1");
        day.setAttribute("max","31");
        day.setAttribute("placeholder","DD");
        
        month.setAttribute("class","inputfield");
        
        year.setAttribute("placeholder","YYYY");
        
        const date = new Date();
        const currentyear = date.getFullYear();
        year.setAttribute("type","text");
        year.setAttribute("min", currentyear-120);
        year.setAttribute("type", currentyear);

        daydiv.appendChild(daylabel);
        daydiv.appendChild(day);
        monthdiv.appendChild(monthlabel);
        monthdiv.appendChild(month);
        yeardiv.appendChild(yearlabel);
        yeardiv.appendChild(year);

        seconddiv.appendChild(daydiv);
        seconddiv.appendChild(monthdiv);
        seconddiv.appendChild(yeardiv);

        bdaywrap.appendChild(firstdiv);
        bdaywrap.appendChild(seconddiv);

        return bdaywrap;
    }

    function createBirthMonths(){
        const Jan = document.createElement("option");
        const Feb = document.createElement("option");
        const Mar = document.createElement("option");
        const Apr = document.createElement("option");
        const May = document.createElement("option");
        const Jun = document.createElement("option");
        const Jul = document.createElement("option");
        const Aug = document.createElement("option");
        const Sep = document.createElement("option");
        const Oct = document.createElement("option");
        const Nov = document.createElement("option");
        const Dec = document.createElement("option");
        const none = document.createElement("option");
        const months = [none,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec];
        const monthhtml = ['Month','January','February','March','April','May','June','July','August','September','October','November','December'];
        
        none.disabled = true;
        none.selected = true;
        none.hidden = true;
        
        for(let i = 0; i < months.length; i++){
            months[i].setAttribute("value",i);
            months[i].innerHTML = monthhtml[i];
        }

        return months;
    }

    function createNameInputs(){
        const namewrapper = document.createElement("div");
        const fnamediv = document.createElement("div");
        const lnamediv = document.createElement("div");
        const firstname = document.createElement("input");
        const lastname = document.createElement("input");
        const labelfname = document.createElement("label");
        const labellname = document.createElement("label");

        //input type = text
        firstname.setAttribute("type","text");
        lastname.setAttribute("type","text");

        //name = firstname, id = firstname
        firstname.setAttribute("name","firstname");
        firstname.setAttribute("id","firstname");
        firstname.setAttribute("placeholder","Kevin");

        //name = lastname, id = lastname
        lastname.setAttribute("name","lastname");
        lastname.setAttribute("id","lastname");
        lastname.setAttribute("placeholder","Kaslana");

        //for = firstname, for = lastname
        labelfname.setAttribute("for","firstname");
        labellname.setAttribute("for","lastname");


        //label html
        labelfname.innerHTML = "First Name";
        labellname.innerHTML = "Last Name";

        console.log(lastname.outerHTML);

        $(firstname).addClass("inputfield");
        $(lastname).addClass("inputfield");
        
        $(namewrapper).addClass("doubleboxwrapper");
        $(fnamediv).addClass("doubleboxlayer");
        $(lnamediv).addClass("doubleboxlayer");

        $(fnamediv).append(labelfname);
        $(fnamediv).append(firstname);
        
        $(lnamediv).append(labellname);
        $(lnamediv).append(lastname);
        $(namewrapper).append(fnamediv);
        $(namewrapper).append(lnamediv);
        return namewrapper;
    }
});