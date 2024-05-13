const AddressForm = () => {
  return (
    <>
      <form className="w-full mt-[32px] flex flex-col gap-[16px] ">
        <input
          type="text"
          placeholder="CEP"
          className="w-[50%] h-[42px] p-3 text-[1.5rem] border-solid border-[1px] rounded-lg bg-base-input outline-none"
        />
        <input
          type="text"
          placeholder="Rua"
          className=" h-[42px] p-3 text-[1.5rem] border-solid border-[1px] rounded-lg bg-base-input outline-none"
        />
        <div className="w-full flex gap-4">
          <input
            type="text"
            placeholder="Contacto"
            className=" h-[42px] p-3 text-[1.5rem] border-solid border-[1px] rounded-lg bg-base-input outline-none"
          />
          <input
            type="text"
            placeholder="Nome"
            className=" h-[42px] p-3 text-[1.5rem] border-solid border-[1px] rounded-lg bg-base-input outline-none flex-1"
          />
        </div>

        <div className="flex items-center justify-between gap-5">
          <input
            type="text"
            placeholder="Bairro"
            className=" h-[42px] p-3 text-[1.5rem] border-solid border-[1px] rounded-lg bg-base-input outline-none flex-1"
          />
          <input
            type="text"
            placeholder="Cidade"
            className=" h-[42px] p-3 text-[1.5rem] border-solid border-[1px] rounded-lg bg-base-input outline-none flex-1"
          />
        </div>
      </form>
    </>
  );
};

export default AddressForm;
