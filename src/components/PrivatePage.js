
function renderError() {
  localStorage.clear("myWalletUser");
  return <h1>VOCÊ NÃO É AUTORIZADO</h1>;
}

export default function PrivatePage({ children }) {

  const auth = JSON.parse(localStorage.getItem("myWalletUser"));

  if (!auth) {
    return renderError();
  }

  return (
      <>
        {children}
      </>
  );
}