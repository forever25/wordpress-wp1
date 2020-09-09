<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?

    global $post;
    if(have_posts()) {
        while (have_posts()) {
            the_post();
            ?>
            <div>
                <a href="<? the_permalink();?>"><h2><? the_title() ?></h2></a>
            </div>
            <div><? the_content(); ?></div>
    <?
//            var_dump($post);
        }
    } else {

    }


    ?>
</body>
</html>