import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Gallery from "../components/Gallery/Gallery";
import InvitationCard from "../components/InvitationCard/InvitationCard";

const images = [
  "https://dsm01pap003files.storage.live.com/y4m3w3_LLSJmdoO2bvkghqMpve3FOgtqxhKInrSm1TB5Jzym-vevSb89lIlfl3RIkCyHzwxCloxfDL6UaSDReI5a9-QPP3DhOiwCq6MbwmOTG6IchGwh_DBVntf5TZAAUXfWLarVP3dgW970ucQkXSOJ58andMls0gjNdPWqxjrjmnwKCDt7oCtab8cMCDbIyDc?width=768&height=1024&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4mhxWEm7ONA7LfUiOc3iRZm7wBCWy-okaEelFdbGrfh4l91oLh54lj7UcsGqTrPkjV3O8uWPymvxHr32MYE--O4ehqKanTlZKM7u7ImZNo_sG0zJQhaop9C1-IbAd6ePyDJqJliB32rNs_D8-O-gm-8BQfQL7OTew3SwCWmls7ZrY3BCepEzNEz0M7HA1--AY9?width=1024&height=683&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4mTOPGYs26aYJ5py0VS0-AicU_u5pCjZyhc6lmtgnSs3YgzZZK5jOYLaaATnPTsUjmT_sX3oOc4ZPNZI2dh_u9SGHLFxkaF6mmUC14zwi_NA2F3wGmL-LLiD0EcWna4OPiyTBLuIkM3y9-dKTwN7pbwoguNy_7OGw_c-jZ1wbRzhWrpEcHQ_S4n15TPQ8F6dLb?width=768&height=1024&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4mr29Bi0GE4OVM_lJ7D-T9gwpwuW-5nh3_f6YGgVl6o6AfIx7Dg_KEoVWFpw9hzXg_kGEbfmjlkrEoHn9OG8vabZRkhYaK7uUEgDg4GF0Q8zgNrh1y2mhaIq7r5zM2cqhbtLfA2yrT2oXviABTUOMrnxLV-hXLLocyTGdqspjlzMYGIFMS9LsbiUSU9HK1g8_c?width=1024&height=1024&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4mKtkvM_-rh8qc_PQb3H2DE_B9LMW9shdDXBE5SPypUN-HMHB7dcb4typ5z3AOU2BIk-7SErekd0Q8SmgVhf_BVUBBDGIpi3ga6OQQiGAc6JYr1_QNZKk2c6slRz8gu0ahQJJY4M9b2FxVIDasPZR_JINqaAjeCkrCin6DGAtxKAS3yjndlJb_Xbqk_LlZZdHO?width=1024&height=683&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4mSaa9wXOxFhzutRADfHJJwAmo_loosRQ_wuEAGBLpdY48ctiz-TmxvV0pfOKoJvhN8TgY1yOyHeRRCJz2Qg7E4tZk8i6dO9CAqp0dMYoaiOhl6OBFU6b9rupjvz7RU0itdJBL1sznqC9OFJX1_kkbm438B-WDk1Kht-TnRIqqHKUpib2Y1poOV19BZWCMESOX?width=1024&height=683&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4mRjRMvDOzL13AUgRGGh1IL3r0MUiX1HCgSlwCsZuFXOb12d_CTfGf1ocxevwTjfdPePs89u3emRDmI6WT8s6OEWmscHLooi4hP-fqcmfjAK0A2YqYz0Cf-LlrF9dOh4lEFmwn34EffQ4RhCTA0eF-F0zKmJYETE54g6eG5rHtgpogislaeP7hSyUFHnyUj48J?width=683&height=1024&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4mhB0-EJjrRm16KKFXUon15ufpTPiXsG-OacXOIlge_F3uOoouAkQ1LhBcJ27M1W_te5LJCPjigtC_0VPCzQ1HiycpMxKIeRaGGrnwPcXIN2G-a6NkjPhVQxT3_b0aPyZ_LwtgF_xQbZeO47gVPCavfQLDZ4qUZL_h7pXD_Bcr7hP0QSSpNxwgcd8OUgZyDre2?width=682&height=1024&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4m86LRhSWq8-A3yUGDcg8hbHQFUmDHHYiKyn6Z7vs41849OQCffXaF6sgGM56bqQjv5517SFq5ODtrqM3_wTqYIQY9kPG5D6mnOMPRbH81YsWwv4iaiT6n9Ah_aV4KRtftg_ng107nk6zkAg8r8DeYIrxFW2wRDIFfTlfWGo1VX5o42eBFE9aE_geqhJnv7PDg?width=1024&height=682&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4muqdw40alLgNJvPvcaUWeCmCdeme5FGT_gPRenYIk9Kqgl7_fAj1ECRaoFXN-3xf39xeYd-mCJvx-NzQkoRQCoAjssKnqGEv42X0ryR9YVGGcW97pCvhaoGFFTrD40fxlPZdpC2NFD18H64AxWXU0tt7jYUV4zIeKKiMfS55qx4gqDANU8DbHaGF-q8oYA9gb?width=1024&height=683&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4mdW-eW3UmInmuasve-EqbH6FMPkDo8UcnNKRNondzxePXSBGyE4MNU3OtoLlce4ZHu8BmS4jU3d8Aaps94Ehbe6u2lDrUlt7twTkrF0KH6Xje5lgQFvB5Ge59L4woKk87RJ53v99kUGjV8JaskigQqDK99n8S4ZkXofTEwbB08v9c-hwVO2O01l1lPJkOVTyw?width=1024&height=683&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4mmFh0h5FkzobOly6ObiqW2d6xhT_kICfFb-7xbEpMRi_m4V99bnZMgEEP6FnoFNGR-h--k-VM2KRqRShACcFqGkqg1gGadKtVet2tYR4hkmfTi_-9o853cxGg_p9OmI-oPqLhtYwMVb4fdoMn7lpruCjR7FZQUi-lleKwMLDXGGvCJOC3_g3OxtT3NTkjTa92?width=1024&height=683&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4mqdFrLrR_ywZmmr1qhwHGOW0ndn1tYA3m8RPb6vj3-FBa9QVznTaMs5T6sKF5Eq1Yi-VqLqyzTWWCWLcrey3bLc1I50kRHPAlWpINuDRq4OQglE4wlEdE8kiXNlqpglwL1l1T-QXE5boU5sEvVKSrSY3KxwLMyfCqrr1CZ-UV3JmMd480m5_V4ODZASdS0PdE?width=683&height=1024&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4mfMptor08bgnaJhPDtqCqNgkbL1U1kIQmtEhEaggV54_ytd95nGza0dn9C41kLSeRmxrgsRKV48OqFdCVT1t90LY0BwX5D5Q8wUBkI5t6XP0XVY4PG2oQzWU6UZvs2qHEM-FXOp1-_ytFkzE43PwqnIodh1vdncb6VvPwcbH7SzoxtAzmFzOjf9TK7DQLKhYK?width=914&height=914&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4m_0fz1zNkBQn5X7PdaHiILU0IK7ElozXF-d5HOIY70Vifw0epwiJ90Ud4u8dtutba2UkE8rZ8P3gT2Xm1ISFepRDVtlapUHLKQzQ1vzXS4al460h9iJi2XlHWvB8G0HztZSp6QIzkPG4FVbIPPlp1S8CiG9gPtWnRUPq2rA-1I5YXOYoKKiF3iJv2R5jLLZF3?width=1024&height=683&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4m6kSjhVhIZFvGgmh1zSx7c0fErmmSJA1E--ryBzCjRDk-Q3BWSSE8Xc7hUGAyWJFu84xMiGyP-QtCrotfexi5z6IVQi51lpwd0FtIPkkRPAh7-I5fkcScIehm5QEfn1k5XPWYsOHb0d4tVb0EFLE107MmDzy8r9uE6icpTdtjjYewj6QOF7SeM5AIiAIcl48p?width=1024&height=683&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4mmSBgfq7UMLjhuYMWh9KxVt6LHkiv9hbZK_jK2XISANTyiGD3X6Bk9XdrSrR-uUkzDCBkXZEskeoiTSOIOm3-17_Qaf-jcDyzszClinTLjrs5HBlFLWNK2E4MMNU7IN-Efb2TW4sUyZUqhgXsEQspf9q0tiHGSVbDdbzjEHxgXxOTs5fsm5_sL4WpSvvWa68_?width=768&height=1024&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4mfTjL6vaXG0_LvK_YDB2vTPjNyRhqBvxekBw5_Qx-sJLGEyUcZ06kOmffTLK7Anm0nrlWbVKssj4ZBCszhmvNXv7wpz6Hq5fjOf076d6dGF-3l7pORfN1PH5nXoxp3dTdM9XXaaAG4q-_YkyZcVA3P9eXIpNiPY8Xfdi-Hir1S3addXfIiUO0c8Im6X-jd2hu?width=576&height=1024&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4mvUXmpwbeGwxUe_I1Hlvp5Qlod8BrkpascSnUIJGZob1278oVDmVUjdrP9X7OTWed87FHv1qr1Q2m4qA5dzfSCdhxdG-IGJRNRRQHaJ21a9kzEHF5DUKBrOl-TrHMHcBFhde8fs9ukgfe7ZnH26c5-EBxjrNtWPMm-fVVZWzKrdRSzl5Y2hIaBBV2KAexQxjz?width=768&height=1024&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4miAZMblptWLuyb-UD_nCNxyZ1Wh7MisvmWuVXh6Cipq8LE8GOrmhJTOBJNGryup0J4oyeH-OFN15gVsGv-GGz0ploPfCObf3rRsxfi3W8Zgitj_9TnvVTBSJUzSGcqM8m5zg8Z1ETI6ZnLjwLN6AvVkMa_E5UlpOTTdUePYxOZsA1uCIRZyyIPDV9El4DORXr?width=768&height=1024&cropmode=none",
  "https://dsm01pap003files.storage.live.com/y4mYeoyz76KbDiGZpZ8VwoMNvAJ1BjT9kfNFoDHqMTETwA6fwFg5DuxEpePcVFZtaRi9oUAtrbC9REICnnuzvPInYvB-EREJC3l9swz5f4c0sZr7ULss0hb1RGZqhV8uctJwZXrp4u8JYc5HaRgAqXoYeWpWLKzBZsi55yWln6sXHKhmi4d9kvvNa8oTWCWMjW4?width=1024&height=1024&cropmode=none",
];

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <InvitationCard images={images} />,
    },
    {
      path: "/gallery/:initvalue",
      element: <Gallery images={images} />,
    },
    {
      path: "/gallery",
      element: <Gallery images={images} />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ],
  {
    basename: "/lsy-invi-card/",
  }
);

export default router;
