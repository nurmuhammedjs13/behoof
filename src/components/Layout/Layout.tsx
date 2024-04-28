import { getDatabase, ref, get } from "firebase/database";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../../store/slices/dataFromfb";

interface Props {
    children: React.ReactNode;
}

function Layout({ children }: Props) {
    const [datas, setDatas] = useState<any[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const db = getDatabase();
        const productRef = ref(db, "products");

        get(productRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const newData = Object.values(snapshot.val());
                    setDatas([...datas, ...newData]);
                    dispatch(addData(newData));
                    console.log(datas);
                } else {
                    console.log("Данные отсутствуют");
                }
            })
            .catch((error) => {
                console.error("Ошибка получения данных:", error);
            });
    }, []);

    return <>{children}</>;
}

export default Layout;
