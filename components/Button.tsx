type ButtonProp = {
  title: string;
  isLoading?: boolean;
  onClickFunc: any;
  children?: any;
  style?: any;
};

export default function Button(props: ButtonProp) {
  return <button onClick={props.onClickFunc} className="btn loading"></button>;
}
