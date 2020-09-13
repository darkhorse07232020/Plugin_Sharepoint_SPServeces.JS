# About this plugin
This project is plugin that can use SharePoint website

## jquery.getlist.js
This plugin get results from list named "mylinks".
And the results are shown in the div named of class "result_Link_div".

## jquery.carousel.js
This plugin get results from list named "Carousel".
And the results are shown in the div named of class "result_Carousel_div" as carousel.

## jquery.filter.js
This plugin help users can see only their department result.
If users select their department in dropdown menu, the selection is saved in cookie.
And every login, the selection in dropdown menu is set automatically according to cookie.

# Usage
## jquery.getlist.js
You can use by adding the div that have class name "result_Link_div".
```
<!-- show Link -->
<div class="result_Link_div"></div>
<script type="text/javascript" src="../SiteAssets/jquery.getlist.js"></script>
```

## jquery.carousel.js
You can use by adding the div that have class name "result_Carousel_div".
```
<div class="result_Carousel_div"></div>
<script type="text/javascript" src="../SiteAssets/jquery.carousel.js"></script>
```

## jquery.filter.js
Add this code in html.
1. The dropdown class name should be "custom-select".
2. The filtering div class name should be "filter_div".
    - The filtering item div class name should be "filter_child".
Then the dropdown menu shows list as the div "id".
```
<div class="custom-select"></div>

<script type="text/javascript" src="../SiteAssets/jquery.filter.js"></script>

<div class="filter_div">
    <div class="filter_child" id="Department A"> // id: the name shown in dropdown menu
        // your code here
    </div>
    <div class="filter_child" id="Department B">// id: the name shown in dropdown menu
        // your code here
    </div>
    <div class="filter_child" id="Department C">// id: the name shown in dropdown menu
        // your code here
    </div>
</div>
```
