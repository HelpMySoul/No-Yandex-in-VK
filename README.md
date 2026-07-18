# VK Invite Promo Blocker

Расширение для Microsoft Edge / Google Chrome, которое удаляет и блокирует повторное появление элемента `#l_invite_promo` на сайтах [vk.com](https://vk.com/) и [vk.ru](https://vk.ru/).

## Установка локально (Edge / Chrome)

1. Откройте `edge://extensions` или `chrome://extensions`
2. Включите **Режим разработчика**
3. Нажмите **Загрузить распакованное расширение**
4. Выберите папку: `C:\Users\Ain\vk-invite-promo-blocker`
5. Откройте VK и убедитесь, что `#l_invite_promo` отсутствует

## Как работает

- CSS сразу скрывает `#l_invite_promo`
- Content script удаляет элемент из DOM при загрузке
- `MutationObserver` удаляет элемент при повторной вставке в страницу
