# VK Invite Promo Blocker

Расширение для Microsoft Edge / Google Chrome, которое удаляет и блокирует повторное появление элемента `#l_invite_promo` на сайтах [vk.com](https://vk.com/) и [vk.ru](https://vk.ru/).

## Установка локально (Edge / Chrome)

1. Откройте `edge://extensions` или `chrome://extensions`
2. Включите **Режим разработчика**
3. Нажмите **Загрузить распакованное расширение**
4. Выберите папку: `C:\Users\Ain\vk-invite-promo-blocker`
5. Откройте VK и убедитесь, что `#l_invite_promo` отсутствует

## Пакет для стора

Готовый ZIP: `vk-invite-promo-blocker.zip` (в корне проекта).

### Chrome Web Store

1. [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole) — регистрация (~$5 один раз)
2. **New item** → загрузите `vk-invite-promo-blocker.zip`
3. Заполните карточку (описание, скриншоты, privacy: данные не собираются)
4. **Submit for review**

### Microsoft Edge Add-ons

1. [Partner Center](https://partner.microsoft.com/dashboard) — программа Microsoft Edge
2. Создайте расширение → загрузите тот же ZIP
3. Заполните listing и privacy → отправьте на certification

## Как работает

- CSS сразу скрывает `#l_invite_promo`
- Content script удаляет элемент из DOM при загрузке
- `MutationObserver` удаляет элемент при повторной вставке в страницу
