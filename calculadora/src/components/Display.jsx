function Display({ resultado }) {
  return (
    <div className="resultado">
      {resultado !== null && <h2>Resultado: {resultado}</h2>}
    </div>
  );
}

export default Display;
