<template>
  <div class="contacts">
    <h2>Контакты</h2>
    <p>
      Чтобы задать вопрос или обсудить детали вашего проекта, напишите нам
    </p>
    <div class="inner-container">
      <div class="avatar-container">
        <div class="avatar"></div>
        <div class="label">Ирина Брун,</div>
        <div>координатор</div>
      </div>
      <div class="contacts-container">
        <div class="contacts-inner-container">
          <div>
            <img class="icon" alt="email" src="@/assets/icons/email.svg" />
            <a href="mailto:сontact@testfas.com">сontact@testfas.com</a>
          </div>
          <div>
            <img class="icon" alt="telegram" src="@/assets/icons/telegram.svg" />
            <a href="https://t.me/irinapsychometrics">@irinapsychometrics</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .contacts {
    min-width: 600px;
    width: 100%;
    padding: 40px 60px;
    font-size: 18px;
    line-height: 1.3;
  }

  .contacts .inner-container {
    display: flex;
  }

  .contacts .inner-container .avatar-container {
    padding: 20px 0;
    width: 215px;
    text-align: center;
  }

  .contacts .inner-container .avatar-container .avatar {
    width: 215px;
    height: 215px;
    background-size: cover;
    border-radius: 50%;
    background-image: url('@/assets/people/irina.jpg');
  }

  .contacts .inner-container .avatar-container .label {
    padding-top: 20px;
  }

  .contacts .inner-container .contacts-container {
    padding-left: 20px;
  }

  .contacts .inner-container .contacts-container .contacts-inner-container {
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
        transform: translateY(-50%);
  }

  .contacts .inner-container .contacts-container .contacts-inner-container .icon {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    float: left;
  }

  .contacts .inner-container .contacts-container .contacts-inner-container a {
    margin: 0;
    color: var(--fas-blue);
    line-height: 30px;
  }

  .contacts p {
    padding: 20px 0;
  }

  @media (min-width: 1200px) {
    .contacts {
      padding: 40px 120px;
    }

    .contacts .inner-container .contacts-container {
      padding-left: 120px;
    }
}
</style>
