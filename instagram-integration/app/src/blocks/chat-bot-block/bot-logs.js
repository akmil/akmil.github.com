// import * as wizardForm from "../wizard-form/wizard-form";
// import * as chatBotStatus from "./chat-bot-status";
import viewUtils from "../../common/js-services/view";

const json = {
  'status': {
  'state': 'ok'
},
  'data': {
  'settings': {
    'pagination': {
      'pages': [
        1,
        2,
        3
      ],
        'current': 1,
        'next': 2
    },
    'invoke_in_millis': 1000
  },
  'logs': [
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:42:16]: Пауза 108 сек.'
    },
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:40:28]: Пауза 107 сек.'
    },
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:38:55]: Пауза 92 сек.'
    },
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:36:55]: Пауза 119 сек.'
    },
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:35:20]: Пауза 94 сек.'
    },
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:33:55]: Пауза 84 сек.'
    },
    {
      'level': 'ERROR',
      'value': '[01.02.2019 09:32:01]: Пауза 112 сек.'
    },
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:30:16]: Пауза 104 сек.'
    },
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:29:14]: Пауза 60 сек.'
    },
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:28:06]: Пауза 67 сек.'
    },
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:26:34]: Пауза 91 сек.'
    },
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:24:52]: Пауза 101 сек.'
    },
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:23:27]: Пауза 83 сек.'
    },
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:22:15]: Пауза 71 сек.'
    },
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:21:02]: Пауза 72 сек.'
    },
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:19:41]: Пауза 80 сек.'
    },
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:18:14]: Пауза 85 сек.'
    },
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:17:07]: Пауза 66 сек.'
    },
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:15:28]: Пауза 98 сек.'
    },
    {
      'level': 'INFO',
      'value': '[01.02.2019 09:14:11]: Пауза 76 сек.'
    }
  ]
}
};

function initHandlerPagination($previous, $next) {
  const $wrapper = $('.logs-pagination');
  const {pagination, invoke_in_millis} = json.data.settings;
  const lastPage = pagination.pages[pagination.pages.length - 1];
  $previous.on('click',(e) => {
    const currentActiveIdx = $wrapper.find('li.page-number.active').index();
    updateButtons(e, currentActiveIdx-1);
    if(currentActiveIdx === 0 && $next.hasClass('disabled')) {
      $previous.removeClass('disabled');
    }
    console.log(currentActiveIdx, lastPage);
  });
  const updateButtons = function(e, currentActiveIdx) {
    $wrapper.find('li.page-number.active').removeClass('active');
    $($wrapper.find('li.page-number')[currentActiveIdx]).addClass('active');
  };
  $next.on('click',(e) => {
    const currentActiveIdx = $wrapper.find('li.page-number.active').index();
    updateButtons(e, currentActiveIdx);
    if (lastPage <= currentActiveIdx + 1) {
      $(e.target).parent().addClass('disabled');
    }
    if(currentActiveIdx && $previous.hasClass('disabled')) {
      $previous.removeClass('disabled');
    }
  });
}
function addPagination() {
  const $wrapper = $('.logs-pagination');
  const {pagination, invoke_in_millis} = json.data.settings;
  const lastPage = pagination.pages[pagination.pages.length - 1];
  const tplPrevious = $(`<li class="page-item ${(pagination.current === 1) ? 'disabled' : ''}"><a class="page-link" href="#">Назад</a></li>`);
  const tplNext = $(`<li class="page-item ${(pagination.current === lastPage) ? 'disabled' : ''}"><a class="page-link" href="#">Вперед</a></li>`);

  $wrapper.append(tplPrevious);
  pagination['pages'].forEach((item) => {
    $(`<li class="page-item page-number ${(pagination.current === item) ? 'active' : ''}"><a class="page-link" href="#">${item}</a></li>`).appendTo($wrapper);
  });
  $wrapper.append(tplNext);
  initHandlerPagination(tplPrevious, tplNext);
}

function fillListMeta($list, dataArray, isRuns) {
  const items = dataArray;
  // const defaultAvatarSrc = 'https://i.imgur.com/jNNT4LE.png';
  $list.empty();
  if (!items.length) {
    $(`<li class="list-group-item py-2">
        <p>В этом разделе нет ни одной задачи.</p>
    </li>`).appendTo($list);
    return;
  }
  addPagination();
  items.forEach((item) => {
    const {level, value} = item;
    $(`<li class="list-group-item p-0 py-2">
              <div class="media-body d-flex">
                  <div class="col task-type ${(level === 'ERROR') ? 'text-danger text-right' : ''}">
                      ${(value) ? `${value}` : ''}
                  </div>
              </div>
          </li>`).appendTo($list);

    if (!$('li', $list).length) {
      $(`<li class="list-group-item py-2" data-task-id="${task_id}">
                <p>В этом разделе нет ни одной задачи.</p>
            </li>`).appendTo($list);
    }
  });
}

export function init() {
  if ($('.chat-bot-page').length) {
    const $list = $('.bot-log-tasks');
    fillListMeta($list, json.data.logs);
  }
}
