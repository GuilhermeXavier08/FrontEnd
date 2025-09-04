import style from './page.module.scss'
//arrow function

//function

//export function

export default function Home() {
  return(
    <main className={style.container}>
      <h1 className={style.title}>Hello World!!!</h1>
      <p className={style.subtitle}>Minha Primeira Página Next</p>
    </main>
  );
}