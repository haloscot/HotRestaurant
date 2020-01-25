async function getTables() {
    try {
        $.ajax({
            url: "/api/tables",
            method: "GET"

        }).then(function(response) {
            console.log(response);
            //$("#current-reservations-I")
        });
    } catch (err) {

    }
};

//main
getTables();