<template>
  <div class="dictionary-create">
    <h2 class="dictionary-create__title">Редактирование справочника</h2>
    <form class="dictionary-create__form" @submit.prevent="saveChanges">
      <!-- Поле "Наименование" -->
      <div class="dictionary-create__form-group">
        <label for="name" class="dictionary-create__label">Наименование:</label>
        <input
          type="text"
          id="name"
          v-model="directory.name"
          class="dictionary-create__input"
        />
        <span v-if="errors.name" class="dictionary-create__error">{{ errors.name }}</span>
      </div>

      <!-- Поле "Описание" -->
      <div class="dictionary-create__form-group">
        <label for="description" class="dictionary-create__label">Описание:</label>
        <textarea
          id="description"
          v-model="directory.description"
          class="dictionary-create__textarea"
        ></textarea>
        <span v-if="errors.description" class="dictionary-create__error">{{ errors.description }}</span>
      </div>

      <!-- Поле "Изображение" -->
      <div class="dictionary-create__form-group">
        <label for="image" class="dictionary-create__label">Изображение:</label>
        <input
          type="file"
          id="image"
          @change="handleImageUpload"
          accept="image/*"
          class="dictionary-create__input"
        />
        <img
          v-if="directory.image"
          :src="directory.image"
          alt="Изображение"
          class="dictionary-create__preview-image"
        />
        <span v-if="errors.image" class="dictionary-create__error">{{ errors.image }}</span>
      </div>

      <!-- Поле "Хеш-теги" -->
      <div class="dictionary-create__form-group">
        <label for="hashtags" class="dictionary-create__label">Хеш-теги:</label>
        <input
          type="text"
          id="hashtags"
          v-model="directory.hashtags"
          placeholder="Введите хеш-теги через запятую"
          class="dictionary-create__input"
        />
        <span v-if="errors.hashtags" class="dictionary-create__error">{{ errors.hashtags }}</span>
      </div>

      <!-- Кнопка "Сохранить" -->
      <button type="submit" class="dictionary-create__button">Сохранить</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Реактивные данные
const directory = ref({
  name: '',
  description: '',
  image: '',
  hashtags: ''
});

const errors = ref({
  name: '',
  description: '',
  image: '',
  hashtags: ''
});

// Валидация формы
const validateForm = () => {
  let isValid = true;

  // Валидация "Наименование"
  if (!directory.value.name.trim()) {
    errors.value.name = 'Поле "Наименование" обязательно для заполнения.';
    isValid = false;
  } else {
    errors.value.name = '';
  }

  // Валидация "Описание"
  if (!directory.value.description.trim()) {
    errors.value.description = 'Поле "Описание" обязательно для заполнения.';
    isValid = false;
  } else {
    errors.value.description = '';
  }

  // Валидация "Хеш-теги"
  const hashtagsRegex = /^[a-zA-Zа-яА-Я0-9\s,#]+$/;
  if (directory.value.hashtags && !hashtagsRegex.test(directory.value.hashtags)) {
    errors.value.hashtags = 'Хеш-теги должны содержать только буквы, цифры, запятые и пробелы.';
    isValid = false;
  } else {
    errors.value.hashtags = '';
  }

  return isValid;
};

// Обработка загрузки изображения
const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        directory.value.image = e.target.result;
        errors.value.image = '';
      };
      reader.readAsDataURL(file);
    } else {
      errors.value.image = 'Файл должен быть изображением.';
    }
  }
};

// Сохранение изменений
const saveChanges = () => {
  if (validateForm()) {
    console.log('Сохраненные данные:', directory.value);
    // Здесь можно добавить логику для отправки данных на сервер
  } else {
    console.log('Форма содержит ошибки.');
  }
};
</script>

<style lang="scss" scoped>
.dictionary-create {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;

  &__title {
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__form-group {
    margin-bottom: 15px;
  }

  &__label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  &__input,
  &__textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;

    &:focus {
      outline: none;
      border-color: #42b983;
      box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
    }
  }

  &__textarea {
    resize: vertical;
    height: 100px;
  }

  &__preview-image {
    max-width: 100%;
    height: auto;
    margin-top: 10px;
    border-radius: 4px;
  }

  &__button {
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #369f6e;
    }

    &:active {
      background-color: #2d855c;
    }
  }

  &__error {
    color: red;
    font-size: 0.9em;
    margin-top: 5px;
    display: block;
  }
}
</style>


