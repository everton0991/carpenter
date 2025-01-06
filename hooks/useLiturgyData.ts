import { format } from 'date-fns';
import { useEffect, useState } from 'react';

export const useLiturgyData = () => {
  const [liturgyData, setLiturgyData] = useState<any>({});
  const date = new Date();

  // TODO - Move this to a Hook/Helper
  useEffect(() => {
    const fetchDailyLiturgy = async () => {
      console.log({
        day: format(date, 'dd'),
        month: format(date, 'MM'),
        year: format(date, 'y'),
      });
      const todaysLiturgy = await fetch(
        `https://liturgia.up.railway.app/?dia=${format(
          date,
          'dd'
        )}&mes=${format(date, 'MM')}&ano=${format(date, 'y')}`
      );
      const response = await todaysLiturgy.json();
      setLiturgyData(response);
    };

    fetchDailyLiturgy();
  }, []);

  // TODO - Rename returned object properties
  return {
    title: liturgyData.liturgia,
    color: liturgyData.cor,
    date: {
      day: format(date, 'dd'),
      month: format(date, 'MMM'),
      year: format(date, 'y'),
      weekDay: format(date, 'eeee'),
    },
    firstRead: {
      title: liturgyData.primeiraLeitura?.titulo,
      ref: liturgyData.primeiraLeitura?.referencia,
      text: liturgyData.primeiraLeitura?.texto,
    },
    psalm: {
      chorus: liturgyData.salmo?.refrao,
      ref: liturgyData.salmo?.referencia,
      text: liturgyData.salmo?.texto,
    },
    gospel: {
      title: liturgyData.evangelho?.titulo,
      ref: liturgyData.evangelho?.referencia,
      text: liturgyData.evangelho?.texto,
    },
  };
};
