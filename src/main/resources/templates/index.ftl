<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>demo</title>

<#if tag == "product">

    <link rel="stylesheet" href="/js/${app_css}">

<#else>

    <link rel="stylesheet" href="http://localhost:9001/js/app.css">

</#if>

</head>

<body>
<div id="wrapper">

</div>

<#if tag == "product">

<script src="/js/${vendor_js}"></script>
<script src="/js/${app_js}"></script>

<#else>

<script src="http://localhost:9001/js/vendor.js"></script>
<script src="http://localhost:9001/js/app.js"></script>

</#if>

</body>

</html>
