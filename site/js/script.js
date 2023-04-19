const rezume = document.querySelector('#rezume-button');
const favoriteBt =document.querySelectorAll('.rezume-favorite')
rezume.onclick = function() {
        if (this.textContent == 'Резюме'){
          this.textContent = 'Вакансии';
        } else if (this.textContent == 'Вакансии') {
          this.textContent = 'Компании';
        } else if (this.textContent == 'Компании'){
          this.textContent = 'Резюме'
        }
      }

favoriteBt.forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.textContent === 'В избранном'){
            btn.textContent = 'В избранное';
          } else {
            btn.textContent = 'В избранном'
          }
        })
      })
      