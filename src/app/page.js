import Image from 'next/image'
import styles from './page.module.css'
import TitleDriver from './components/titleDriver/titleDriver'
import DriverInformation from './components/driverInformation/driverInformation'
import ContactDriver from './components/contactDriver/contactDriver'
import MessageSquare from './components/messageSquare/messageSquare'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.barSlide}></div>
      <TitleDriver />
      <DriverInformation />
      <ContactDriver />
      <MessageSquare text="Jake estou no local já lhe esperando. Estou com camisa azul e calça jeans" photo="woman-image.jpg" />
      <MessageSquare text="Acabei de lhe ver. Vou estacionar o carro próximo." photo="personPhoto.svg" />
    </main>
  )
}
