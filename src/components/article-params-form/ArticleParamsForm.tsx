import { FormEvent, useEffect, useState } from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import styles from './ArticleParamsForm.module.scss';
import {
	defaultArticleState,
	fontFamilyOptions,
	fontColors,
	fontSizeOptions,
	contentWidthArr,
	backgroundColors,
	ArticleStateType,
} from 'src/constants/articleProps';
import { Separator } from 'src/ui/separator';

import clsx from 'clsx';
type ArticleParamsFormProps = {
	setArticleState: (state: ArticleStateType) => void;
};
export const ArticleParamsForm = ({
	setArticleState,
}: ArticleParamsFormProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [selectedParams, setSelectedParams] =
		useState<ArticleStateType>(defaultArticleState);
	useEffect(() => {
		if (!isMenuOpen) return;

		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isMenuOpen]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setArticleState(selectedParams);
		setIsMenuOpen(false);
	};

	const handleReset = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSelectedParams(defaultArticleState);
		setArticleState(defaultArticleState);
	};

	return (
		<>
			<ArrowButton isOpen={isMenuOpen} onClick={toggleMenu} />
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isMenuOpen,
				})}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Select
						title='Шрифт'
						options={fontFamilyOptions}
						selected={selectedParams.fontFamilyOption}
						onChange={(selected) => {
							setSelectedParams({
								...selectedParams,
								fontFamilyOption: selected,
							});
						}}
					/>

					<RadioGroup
						title='Размер шрифта'
						name={'fontSize'}
						options={fontSizeOptions}
						selected={selectedParams.fontSizeOption}
						onChange={(selected) => {
							setSelectedParams({
								...selectedParams,
								fontSizeOption: selected,
							});
						}}
					/>

					<Select
						title='Цвет шрифта'
						options={fontColors}
						selected={selectedParams.fontColor}
						onChange={(selected) => {
							setSelectedParams({
								...selectedParams,
								fontColor: selected,
							});
						}}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={selectedParams.backgroundColor}
						onChange={(selected) => {
							setSelectedParams({
								...selectedParams,
								backgroundColor: selected,
							});
						}}
					/>

					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={selectedParams.contentWidth}
						onChange={(selected) => {
							setSelectedParams({
								...selectedParams,
								contentWidth: selected,
							});
						}}
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
			{isMenuOpen && <div className={styles.overlay} onClick={toggleMenu} />}
		</>
	);
};
