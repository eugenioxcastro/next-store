"use client"
import { useState } from "react"
import Image from "next/image"
import classNames from 'classnames/bind'
import styles from './Description.module.sass'

const PLACEHOLDER_IMAGE =
	'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCACFAIUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDhKSpMUhFaILEZop2KMVtEhgKlSmKKlUVZBLHVmOoIxVmMVnIpEqVKopqCpVFc0i0JTWFS4prCsyis9V5KtutVpBWsRMqSVXerUgqs4roiQyKilIorUksbaQrU+2mla40zosQEUmKmK03bW0WQ0MAqZBTVFTItaXM2iSNasxrUca1aiWokA9FqVVpUWp1SsJIpEW2mMtWtlNZazsO5RdarSrV+RKqyrVxAz5BVWQVelFVJBW8SWVyKKcRRWlxWNHbTCtT4ppWuJM6rFcrTcVMwppFbRZDQwCpkFNAqWMVqmQ0TRCrkS1BEKuRLSZBLGtTqtJGtTqtZMRHsprLVnbTHWosO5RkWqcq1pSrVKYU0BmzCqcgrQmFUpRWqGViKKcRRVXA1CKYwqU0xq40dRCwphFSNTDW0SWgAqaMVEKmjrVGbRaiFXIhVSKrsPahmbLUQqwgqGKrKVDIDFNYVLimOKgCpKKozDitCWqM3emhozZx1qjLWhP3qhLVopFc0Up60UxmmTTGNBNMY1ypHRcRjUZNKxqMmtYgSKamjNVganjNaohouw1eirPiNXYT0pmbRfj7VZSqcZqyrVDM2TZpj0bqa5qSSCWqM9XJTVCc0DRSn71Ql61cnNUZTzVIpEJPNFITzRVDLpamM1R76YXrFI2uPZqYWpjNTC1WkUmTq1TxtVINU8bVYM0Ymq5C1ZsTVciakyGjSjarCNVCN6sK9SZNFvdTGaot/FMZ6RAStVGdutTyPVKZqYFac1RlNWZmqlK1UhjCeaKYTRTHcfvppeq/mUhelygpExem76hL0m+nY2iyyrc1NG1Ulapo2oNEaMT1ciesyJqtxPUNiaNON6nWSs6N6nV6m5m0Xd9MZ6g301noM2h0j1UmenSPVWV6pEEUrVUkapJWqrI1WkK4E0VGTRVWC5X30m+oN1G6rsZRkTbqN1Q7qUGk0dUGWFapo2qopqZDWbOmJejarUbVQjNWY2rNlNF9HqZXqmjVMrVFzOSLO+ms9RbqaWpoxaFdqrSNT3aq8hq0Zsikaq7mpJDVdzWqM2Jmimk0VQrlKiiitGYxCnCiioZ2Ux61MlFFZSOyJYjqzHRRWTKLKVMtFFQZyHU00UU0YyImqB6KK0iZMryVXfvRRW0TJkZoooqhH/9k='

export const Description = () => {

    const [hasBorder, setHasBorder] = useState(false)

    const handleClick = () => {
        setHasBorder(!hasBorder)
    }

    // context
    const cx = classNames.bind(styles)

	const buttonStyles = cx('Description__button', {
		'Description__button--border': hasBorder,
	})

    return (
			<section className={styles.Description}>
                <button onClick={handleClick} className={buttonStyles}>
                    <figure className={styles.Description__imageContainer}>
					<Image
						src="/images/description.jpeg"
						alt="products marketplace"
						fill
						placeholder="blur"
						blurDataURL={PLACEHOLDER_IMAGE}
					/>
				</figure>
				
                </button>
                <div className={styles.Description__text}>

				
					<h2>Bring the future today</h2>
					<p>
						Future World: Your Gateway to Tomorrows Tech! Dive into a world of
						cutting-edge gadgets and gear. Stay ahead of the curve and redefine
						your digital lifestyle with us.
					</p>
				</div>
			</section>
		)
}