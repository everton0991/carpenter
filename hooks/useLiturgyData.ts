import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { LITURGY_API_URL } from '@/constants/Configuration';

interface Liturgy {
  liturgia?: string;
  cor?: string;
  primeiraLeitura?: {
    titulo: string;
    referencia: string;
    texto: string;
  };
  segundaLeitura?: {
    titulo: string;
    referencia: string;
    texto: string;
  };
  salmo?: {
    refrao: string;
    referencia: string;
    texto: string;
  };
  evangelho?: {
    titulo: string;
    referencia: string;
    texto: string;
  };
}

export const useLiturgyData = () => {
  const [liturgyData, setLiturgyData] = useState<Liturgy>({});
  const { liturgia, cor, primeiraLeitura, segundaLeitura, salmo, evangelho } =
    liturgyData;
  const date = new Date();

  useEffect(() => {
    const fetchDailyLiturgy = async () => {
      const todaysLiturgy = await fetch(
        `${LITURGY_API_URL}?dia=${format(date, 'dd')}&mes=${format(
          date,
          'MM'
        )}&ano=${format(date, 'y')}`
      );
      const response = await todaysLiturgy.json();
      setLiturgyData(response);
    };

    fetchDailyLiturgy();
  }, []);

  return {
    title: liturgia,
    color: cor,
    date: {
      day: format(date, 'dd'),
      year: format(date, 'y'),
      month: format(date, 'MMM', { locale: ptBR }),
      weekDay: format(date, 'eeee', { locale: ptBR }),
    },
    firstRead: {
      title: primeiraLeitura?.titulo,
      ref: primeiraLeitura?.referencia,
      text: primeiraLeitura?.texto,
    },
    secondRead: {
      title: segundaLeitura?.titulo,
      ref: segundaLeitura?.referencia,
      text: segundaLeitura?.texto,
    },
    psalm: {
      chorus: salmo?.refrao,
      ref: salmo?.referencia,
      text: salmo?.texto,
    },
    gospel: {
      title: evangelho?.titulo,
      ref: evangelho?.referencia,
      text: evangelho?.texto,
    },
  };
};
