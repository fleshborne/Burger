$(function () {
  $('.create-form').on('submit', (event) => {
    // make sure you preventDefault on a submit event
    event.preventDefault();

    let newBurger = {
      burger_name: $('#newBurger').val().trim(),
      devoured: 0,
    };
    // send post request
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger,
    }).then(() => {
      console.log(`Time to eat burger ${this.burger_name}`);
      // this reload page for updated list
      location.reload();
    });
    //   .catch((err) => window.alert(err))
    //   .finally(() => this.setState({ loadingResults: false }));
  });

  $('.eatIt').on('click', (event) => {
    event.preventDefault();

    // let id = $(this).data('id');

    let newDevoured = {
      devoured: 1,
    };

    $.ajax('api/burgers/' + id, {
      type: 'PUT',
      data: newDevoured,
    }).then(() => {
      console.log('IT EAT');
      location.reload();
    });
    //   .catch((error) => window.alert(error))
    //   .finally(() => this.setState({ loadingResults: false }));
  });

  $('.destroyIt').on('click', (event) => {
    // event.preventDefault();
    let id = $(this).data('id');
    //   send delete request
    $.ajax('/api/burgers/' + id, {
      type: 'DELETE',
    }).then(() => {
      console.log('burger went boom', id);
      // reload page
      location.reload();
    });
    //   .catch((error) => window.alert(error))
    //   .finally(() => this.setState({ loadingResults: false }));
  });
});
