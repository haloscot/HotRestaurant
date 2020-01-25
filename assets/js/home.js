async function getTables() {
    try {
        $.ajax({
            url: "/api/tables",
            method: "GET"

        }).then(function(response) {
            console.log(response);
            //$("#current-reservations-I")
            response.forEach(obj => {
                //console.log(obj);
                let {
                    customerName: name,
                    phoneNumber: phone,
                    customerEmail: email,
                    customerID: id
                } = obj;
                let li = $("<li>").addClass("list-group-item").text(`${name}${phone}\n${email}${id}\n`);
                $("#current-reservations-ID").append(li);
            });
        });
    } catch (err) {
        console.log(err);
    }

};
$(document).ready(function() {
    getTables();
});