

function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var $state = $(
      '<span><img src="' +
        $(state.element).data("img_src") +
        '" class="img-flag" /> ' +
        state.text +
        "</span>"
    );
    return $state;
  }

  $(document).ready(function () {
    $("#fromCurrency").select2({
      templateSelection: formatState,
    });
  });
  $(document).ready(function () {
    $("#toCurrency").select2({
      templateSelection: formatState,
    });
  });

document.getElementById('convert').addEventListener('click', function() {
    var amount = document.getElementById('amount').value;
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;
    const API_KEY = "vGjF19hEsSxHJ0/0UtiMoA==UOkpdlpSclfCJUpK";

    fetch(`https://api.api-ninjas.com/v1/convertcurrency?want=${toCurrency}&have=${fromCurrency}&amount=${amount}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': API_KEY,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var result = data.new_amount;
        document.getElementById('result').innerHTML = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    })
    .catch(error => console.error('Error:', error));
});

