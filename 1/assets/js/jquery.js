let rowCount = 1;

$(function () {
  const emptyRow = $('.row-tbl').clone();

  // ------------Button Action------------------------
  $('#add').on('click', function() {
    const newRow = emptyRow.clone();
    generateGroupName(newRow);
    $('#tbody-tbl').prepend(newRow);
    console.log('add');
    setTotalRowNumber();
  });

  $('#table-data').on('click', '.delete',function() {
    $(this).parents('tr').detach();
    setTotalRowNumber();
  });

  const generateGroupName = function(row) {
    // const groupName = row.find(':radio').first().attr('name')
    const number = ++rowCount;
    row.find(':radio').attr('name', 'inlineRadioOptions' + number);
    console.log(number);
  };

  $('#table-data').on('click', '.clone',  function () {
    const currentRow = $(this).closest('.row-tbl');
    const clonedRow = currentRow.clone();
    generateGroupName(clonedRow);
    // const groupName = clonedRow.find(':radio').first().attr('name')
    // const number = ++rowCount;
    // clonedRow.find(':radio').attr('name', groupName.substring(0,18) + number);

    currentRow.after(clonedRow);
    setTotalRowNumber();
  });
  
  // -----------Radio Status----------------------------
  $('#table-data').on('change', '.cell-status input', function () {
    let status = $(this).val();
    let parentRow = $(this).parents('tr');
    if (status === 'confrimed-status') {
      parentRow.find(':text').prop('disabled', true);
    } else {
      parentRow.find(':text').prop('disabled', false);
    }
    setTotalRowNumber();
  });


  // -----------Calc Row number-------------------------
  const setTotalRowNumber = function() {
    const rowCount = $('#table-data >tbody >tr').length;
    $('#total-rows').html(rowCount);
    const countConfrimed = $(
      "#table-data >tbody >tr >.cell-status input[value='confrimed-status']:checked"
    ).length;
    $('#confrimed-rows').html(countConfrimed);
  };
// -----------------------------------------------------
  setTotalRowNumber();
});
