import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/light.css';

export function initSchedule() {
  const dateFrom = document.getElementById('dateFrom');
  const dateTo = document.getElementById('dateTo');

  if (dateFrom) {
    flatpickr(dateFrom, {
      dateFormat: 'd.m.Y',
      locale: 'ru',
      allowInput: false,
      disableMobile: true,
      onChange: function(selectedDates) {
      },
    });
  }

  if (dateTo) {
    flatpickr(dateTo, {
      dateFormat: 'd.m.Y',
      locale: 'ru',
      allowInput: false,
      disableMobile: true,
    });
  }

  const form = document.getElementById('scheduleForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = {
        dateFrom: dateFrom?.value,
        dateTo: dateTo?.value,
        adults: document.getElementById('adults')?.value,
        children: document.getElementById('children')?.value,
      };
      alert(
        `Данные формы:\n\n` +
        `Дата с: ${formData.dateFrom || '—'}\n` +
        `Дата по: ${formData.dateTo || '—'}\n` +
        `Взрослых: ${formData.adults || '—'}\n` +
        `Детей: ${formData.children || '—'}`,
      );
    });
  }
}
