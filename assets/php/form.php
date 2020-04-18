<?php include('form_process.php'); ?>
<article id="contact">
  <h2 class="major">Contact</h2>
  <span class="image main"><img src="images/pic03.jpg" alt="" /></span>
  <form class="contact-form" action="<?= $_SERVER['PHP_SELF']; ?>" method="post">
    <fieldset>
      <input placeholder="Name" type="text" tabindex="1" name="name" autofocus />
    </fieldset>
    <span class="error"><?= $name_error ?></span>
    <fieldset>
      <input placeholder="Email" type="text" name="email" tabindex="2" />
    </fieldset>
    <span class="error"><?= $email_error ?></span>
    <fieldset>
      <textarea
        placeholder="Message"
        type="text"
        tabindex="3"
        name="message"
      ></textarea>
    </fieldset>
    <span class="error"><?= $message_error ?></span>
    <fieldset>
      <button
        name="submit"
        type="submit"
        id="contact-submit"
        data-submit="...Sending"
      >
        Submit
      </button>
    </fieldset>
  </form>
</article>