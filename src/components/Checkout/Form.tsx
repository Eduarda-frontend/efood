import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IMaskInput } from "react-imask";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { clear, close } from "../../store/reducer/cart";
import type { RootReducer } from "../../store";
import { usePurchaseMutation } from "../../services/api";

import { ButtonStyled } from "../Button/styles";
import { DivRow, PedidoFinalizado } from "./styles";
import { ContainerButton } from "../Aside/styles";

type Props = {
	price: string;
	stageCart: () => void;
};

const FormCard = ({ price, stageCart }: Props) => {
    const dispatch = useDispatch()
	const navigate = useNavigate()
	const [stage, setStage] = useState<"delivery" | "payment">("delivery");
	const { items } = useSelector((state: RootReducer) => state.cart);
	const [purchase, { data, isSuccess }] = usePurchaseMutation();

	const form = useFormik({
		initialValues: {
			fullName: "",
			address: "",
			city: "",
			cep: "",
			number: "",
			complement: "",

			cardName: "",
			cardNumber: "",
			cardCode: "",
			expiresMonth: "",
			expiresYear: "",
		},
		validateOnMount: true,
		validationSchema: Yup.object().shape({
			fullName: Yup.string()
				.min(5, "O nome precisa ter pelo menos 5 caracteres")
				.required("* O campo é obrigatório"),
			address: Yup.string().required("* O campo é obrigatório"),
			city: Yup.string().required("* O campo é obrigatório"),
			cep: Yup.string()
				.min(9, "O cep precisa ter 9 caracteres")
				.max(10, "O cep precisa ter 9 caracteres")
				.required("* O campo é obrigatório"),
			number: Yup.string().required("* O campo é obrigatório"),

			cardName: Yup.string().required("* O campo é obrigatório"),
			cardNumber: Yup.string()
				.min(19, "O numero do cartão precisa ter 16 caracteres")
				.max(19, "O numero do cartão precisa ter 16 caracteres")
				.required("* O campo é obrigatório"),
			cardCode: Yup.string()
				.min(3, "O CVV precisa ter 3 caracteres")
				.max(3, "O CVV precisa ter 3 caracteres")
				.required("* O campo é obrigatório"),
			expiresMonth: Yup.string()
				.min(2, "O mês precisa ter 2 caracteres")
				.max(2, "O mês precisa ter 2 caracteres")
				.required("* O campo é obrigatório"),
			expiresYear: Yup.string()
				.min(4, "O ano precisa ter 4 caracteres")
				.max(4, "O ano precisa ter 4 caracteres")
				.required("* O campo é obrigatório"),
		}),

		onSubmit: (values) => {
			purchase({
				products: items.map((item) => ({
					id: item.id,
					price: item.preco as number,
				})),
				delivery: {
					receiver: values.fullName,
					address: {
						descpription: values.complement,
						cidy: values.city,
						zipCode: values.cep,
						number: Number(values.number),
						complement: values.complement,
					},
				},
				payment: {
					card: {
						name: values.cardName,
						number: values.cardNumber,
						code: Number(values.cardCode),
						expires: {
							month: Number(values.expiresMonth),
							year: Number(values.expiresYear),
						},
					},
				},
			});
		},
	});

	const checkInputHasError = (fieldName: string) => {
		const isTouched = fieldName in form.touched;
		const isValid = fieldName in form.errors;
		const hasError = isTouched && isValid;

		return hasError;
	};

	const closeCart = () => {
		dispatch(clear())
		dispatch(close())
		stageCart()
		navigate('/')
	}

	return (
		<>
			{stage === "delivery" && (
				<form onSubmit={form.handleSubmit}>
					<h2>Entrega</h2>

					<label htmlFor="fullName">Quem irá receber</label>
					<input
						type="text"
						id="fullName"
						name="fullName"
						value={form.values.fullName}
						onChange={form.handleChange}
						onBlur={form.handleBlur}
					/>
					{checkInputHasError("fullName") && (
						<p>{form.errors.fullName}</p>
					)}

					<label htmlFor="address">Endereço</label>
					<input
						type="text"
						id="address"
						name="address"
						value={form.values.address}
						onChange={form.handleChange}
						onBlur={form.handleBlur}
					/>
					{checkInputHasError("address") && (
						<p>{form.errors.address}</p>
					)}

					<DivRow>
						<div>
							<label htmlFor="city">Cidade</label>
							<input
								type="text"
								id="city"
								name="city"
								value={form.values.city}
								onChange={form.handleChange}
								onBlur={form.handleBlur}
							/>
							{checkInputHasError("city") && (
								<p>{form.errors.city}</p>
							)}
						</div>

						<div>
							<label htmlFor="cep">CEP</label>
							<IMaskInput
								type="text"
								id="cep"
								name="cep"
								value={form.values.cep}
								onChange={form.handleChange}
								onBlur={form.handleBlur}
								mask="00000-000"

							/>
							{checkInputHasError("cep") && (
								<p>{form.errors.cep}</p>
							)}
						</div>
					</DivRow>

					<label htmlFor="number">Número</label>
					<input
						type="number"
						id="number"
						name="number"
						value={form.values.number}
						onChange={form.handleChange}
						onBlur={form.handleBlur}
					/>
					{checkInputHasError("number") && (
						<p>{form.errors.number}</p>
					)}

					<label htmlFor="complement">Complemento (opicional)</label>
					<input
						type="text"
						id="complement"
						name="complement"
						value={form.values.complement}
						onChange={form.handleChange}
						onBlur={form.handleBlur}
					/>

						<ContainerButton>
							<ButtonStyled title="Clique aqui para continuar com o pagamento" type="button"  onClick={() => {
								if (form.dirty) {
									setStage("payment");
								} else {
								    form.setTouched({
										fullName: true,
										address: true,
										city: true,
										cep: true,
										number: true,
									  });
								}
							}}> Continuar com o pagamento</ButtonStyled>
							<ButtonStyled title="Clique aqui pra voltar ao carrinho" type="button" onClick={stageCart}>Voltar para o carrinho</ButtonStyled>
						</ContainerButton>
				</form>
			)}
			{stage === "payment" && (
				<>
					{isSuccess && data ? (
						<PedidoFinalizado>
							<h3>Pedido realizado - {data.orderId}</h3>

							<p>
								Estamos felizes em informar que seu pedido já
								está em processo de preparação e, em breve, será
								entregue no endereço fornecido. 
							</p>
							<p>
								Gostaríamos de ressaltar que nossos entregadores
								não estão autorizados a realizar cobranças
								extras.
							</p>
							<p>
								Lembre-se da importância de higienizar as mãos
								após o recebimento do pedido, garantindo assim
								sua segurança e bem-estar durante a refeição.
							</p>
							<p>
								Esperamos que desfrute de uma deliciosa e
								agradável experiência gastronômica. Bom apetite!
							</p>

                            <ButtonStyled title="Clique aqui para voltar a lista de restaurantes" type="button" onClick={closeCart}>Concluir</ButtonStyled>
						</PedidoFinalizado>
					) : (
						<form onSubmit={form.handleSubmit}>
							<h3>Pagamento - Valor a pagar <span>{price}</span> </h3>

							<label htmlFor="cardName">Nome no cartão</label>
							<input
								type="text"
								id="cardName"
								name="cardName"
								value={form.values.cardName}
								onChange={form.handleChange}
								onBlur={form.handleBlur}
							/>
							{checkInputHasError("cardName") && (
								<p>{form.errors.cardName}</p>
							)}

							<DivRow $gridColumns="3fr 1fr">
								<div>
									<label htmlFor="cardNumber">
										Número do cartão
									</label>
									<IMaskInput
										type="text"
										id="cardNumber"
										name="cardNumber"
										value={String(form.values.cardNumber)} 
										onChange={form.handleChange}
										onBlur={form.handleBlur}
										mask="0000 0000 0000 0000"

									/>
									{checkInputHasError("cardNumber") && (<p>{form.errors.cardNumber}</p>)}
								</div>

								<div>
									<label htmlFor="cardCode">CVV</label>
									<IMaskInput
										type="text"
										id="cardCode"
										name="cardCode"
										value={form.values.cardCode}
										onChange={form.handleChange}
										onBlur={form.handleBlur}
										mask="000"
										/>
									{checkInputHasError("cardCode") && (<p>{form.errors.cardCode}</p>)}
								</div>
							</DivRow>

							<DivRow>
								<div>
									<label htmlFor="expiresMonth">Mês de vencimento</label>
									<IMaskInput
										type="text"
										id="expiresMonth"
										name="expiresMonth"
										value={form.values.expiresMonth}
										onChange={form.handleChange}
										onBlur={form.handleBlur}
										mask="00"
									/>
									{checkInputHasError("expiresMonth") && (<p>{form.errors.expiresMonth}</p>)}
								</div>

								<div>
									<label htmlFor="expiresYear">Ano de vencimento</label>
									<IMaskInput
										type="text"
										id="expiresYear"
										name="expiresYear"
										value={form.values.expiresYear}
										onChange={form.handleChange}
										onBlur={form.handleBlur}
										mask="0000"
									/>
									{checkInputHasError("expiresYear") && (<p>{form.errors.expiresYear}</p>)}
								</div>
							</DivRow>
							<ContainerButton>
								<ButtonStyled type="submit">Finalizar pagamento</ButtonStyled>
								<ButtonStyled type="button" onClick={() => setStage("delivery")}>Voltar para a edição de endereço </ButtonStyled>
							</ContainerButton>
						</form>
					)}
				</>
			)}
		</>
	);
};

export default FormCard;
