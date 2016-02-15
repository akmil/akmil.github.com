/*В зависимости от типа уведомления показывать результат*/
var dataLike = {
    type: 'like',
    name: 'Roma',
    body: 'user like your post',
    avatar: 'img1.png',
    button: ['ok']
};
var dataMessage = {
    type: 'new_message',
    name: 'Peter',
    body: 'user send you new message',
    avatar: 'img1.png',
    button: ['recive', 'cancel']
};

var dataInviteGroup = {
    type: 'invite_group',
    name: 'Vlad',
    body: 'user invite to group',
    avatar: 'img1.png',
    avatarGroup: 'img2.png',
    button: ['recive', 'reject', 'share']
};

var notifyRender = {
    config : {
        types: 'invite_group',
        name: 'isNonEmpty',
        button: 'isArray'
    },
    msgType: {
        invite_group: {
            showNotification: function (value) {
                console.log('show invite_group');
                return value === 'invite_group';
            },
            instructions: 'the value cannot be empty'
        },
        isArray : {
            showNotification: function (value) {
                console.log('show button: ' +value);
                return Array.isArray(value);
            },
            instructions: 'the value can only be a Array'
        },
        isNonEmpty: {
            showNotification: function (value) {
                return value !== '';
            }
        }
    },
    showNotification: function (data) {
            var i, msg, type, checker, result_ok;
            this.messages = [];
        for (i in data) {
            console.log(i +': '+ this.config[i]);
            if (data.hasOwnProperty(i)) {
                type = this.config[i];
                checker = this.msgType[type];
                if (!type) {
                    continue; // проверка не требуется
                }
                if (!checker) {
                    throw new Error(
                        'ValidationError : ' + 'No handler to validate type ' + type
                    );
                }
                result_ok = checker.showNotification(data[i]);
                if (!result_ok) {
                    msg = 'Invalid value for *' + i + '*, ' + checker.instructions;
                    this.messages.push(msg);
                }
            }
        }
        return this.hasErrors();
    },
    // вспомогательный метод
    hasErrors: function () {
        return this.messages.length !== 0;
    }
};

notifyRender.showNotification(dataInviteGroup);
 if (notifyRender.hasErrors()) {
 console.log(notifyRender.messages.join('\n'));
 }
