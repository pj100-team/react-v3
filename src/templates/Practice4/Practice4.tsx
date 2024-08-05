import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './Practice4.module.css';

export const Practice4: React.FC = () => {
  const [postalCode, setPostalCode] = useState<string>('');
  const [prefecture, setPrefecture] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<{ postalCode?: string; prefecture?: string; city?: string }>({});

  const handlePostalCodeChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPostalCode = event.target.value;
    setPostalCode(newPostalCode);

    if (newPostalCode.length === 7) {
      try {
        const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${newPostalCode}`);
        const data = await response.json();

        if (data.results) {
          const { address1, address2 } = data.results[0];
          setPrefecture(address1);
          setCity(address2);
          setError(null);
        } else {
          setPrefecture('');
          setCity('');
          setError('該当する住所が存在しません');
        }
      } catch (error) {
        console.error('郵便番号検索エラー:', error);
        setPrefecture('');
        setCity('');
        setError('郵便番号の検索中にエラーが発生しました');
      }
    } else if (newPostalCode.length > 0 && (newPostalCode.length < 7 || newPostalCode.length > 7)) {
      setPrefecture('');
      setCity('');
      setError('7桁の数字を入力してください');
    } else {
      setPrefecture('');
      setCity('');
      setError(null);
    }

    if (newPostalCode.length === 7) {
      setFormErrors((prev) => ({ ...prev, postalCode: undefined }));
    }
  };

  const handlePrefectureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrefecture = event.target.value;
    setPrefecture(newPrefecture);

    if (newPrefecture) {
      setFormErrors((prev) => ({ ...prev, prefecture: undefined }));
    }
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCity = event.target.value;
    setCity(newCity);

    if (newCity) {
      setFormErrors((prev) => ({ ...prev, city: undefined }));
    }
  };

  const handleSubmit = () => {
    const newErrors: { postalCode?: string; prefecture?: string; city?: string } = {};

    if (!postalCode) {
      newErrors.postalCode = '必須項目です';
    }
    if (!prefecture) {
      newErrors.prefecture = '必須項目です';
    }
    if (!city) {
      newErrors.city = '必須項目です';
    }

    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
      return;
    }

    setFormErrors({});

    console.log('入力値:', { postalCode, prefecture, city });
  };

  return (
    <div className={styles.center}>
      <div className={styles.from}>
        <span className={styles.address}>郵便番号</span>
        <Input
          id="postalCode"
          type="text"
          value={postalCode}
          onChange={handlePostalCodeChange}
          style={{ border: '1px solid #94A3B8', borderRadius: '5px', padding: '5px' }}
        />
        {formErrors.postalCode && <div className={styles.error}>{formErrors.postalCode}</div>}
      </div>
      <div className={styles.from}>
        <span className={styles.address}>都道府県</span>
        <Input
          id="prefecture"
          type="text"
          value={prefecture}
          onChange={handlePrefectureChange}
          style={{ border: '1px solid #94A3B8', borderRadius: '5px', padding: '5px' }}
        />
        {formErrors.prefecture && <div className={styles.error}>{formErrors.prefecture}</div>}
      </div>
      <div className={styles.from}>
        <span className={styles.address}>市区町村</span>
        <Input
          id="city"
          type="text"
          value={city}
          onChange={handleCityChange}
          style={{ border: '1px solid #94A3B8', borderRadius: '5px', padding: '5px' }}
        />
        {formErrors.city && <div className={styles.error}>{formErrors.city}</div>}
      </div>
      {error && <div className={styles.error}>{error}</div>}
      {!error && <Button onClick={handleSubmit}>送信</Button>}
    </div>
  );
};

export default Practice4;
