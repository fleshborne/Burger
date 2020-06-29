$(() => {
  $(".create-form").on("submit", (event) => {
    // make sure you preventDefault on a submit event
    event.preventDefault();

    let newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: false,
    };
    // send post request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    })
      .then(() => {
        console.log(`Time to eat burger ${this.burger_name}`);
        // this reload page for updated list
        location.reload();
      })
      .catch((err) => window.alert(err))
      .finally(() => this.setState({ loadingResults: false }));
  });

  $(".eatBtn").on("click", (event) => {
    let id = $(this).data("id");
    let devoured = true;

    $.ajax("api/burgers/" + id, {
      type: "PUT",
      data: devoured,
    })
      .then(() => {
        console.log("IT EAT");
        location.reload();
      })
      .catch((error) => window.alert(error))
      .finally(() => this.setState({ loadingResults: false }));
  });

  $(".destroyIt").on("click", (event) => {
    let id = $(this).data("id");
    //   send delete request
    $.ajax("/api/cats/" + id, {
      type: "DELETE",
    })
      .then(() => {
        console.log("burger went boom", id);
        // reload page
        location.reload();
      })
      .catch((error) => window.alert(error))
      .finally(() => this.setState({ loadingResults: false }));
  });
});
