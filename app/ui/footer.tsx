
import cl from '@/app/ui/footer.module.css'

export default function Footer(){
    return(
       
        <footer className={cl.footer}>
        <p>
          Інститут механіки ім.С.П.Тимошенко НАН України. 03057 Київ, Україна,
          вул. Нестерова, 3.
        </p>
  
        <p>{`Email: natcommmech@nas.gov.ua Тел: +380(63) 369-38-97`}</p>
      </footer>
    )
}