var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://g01d59d5c86b401-basedatosalquilercabanas.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/cabin/cabin", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));