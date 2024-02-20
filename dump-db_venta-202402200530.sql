--
-- PostgreSQL database dump
--

-- Dumped from database version 12.14
-- Dumped by pg_dump version 12.14

-- Started on 2024-02-20 05:30:09

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE db_venta;
--
-- TOC entry 2870 (class 1262 OID 53067)
-- Name: db_venta; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE db_venta WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Colombia.1252' LC_CTYPE = 'Spanish_Colombia.1252';


ALTER DATABASE db_venta OWNER TO postgres;

\connect db_venta

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 2871 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 205 (class 1259 OID 53127)
-- Name: categoria; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categoria (
    id integer NOT NULL,
    descripcion character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.categoria OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 53125)
-- Name: categoria_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categoria_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categoria_id_seq OWNER TO postgres;

--
-- TOC entry 2872 (class 0 OID 0)
-- Dependencies: 204
-- Name: categoria_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categoria_id_seq OWNED BY public.categoria.id;


--
-- TOC entry 211 (class 1259 OID 53156)
-- Name: detalle_venta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.detalle_venta (
    id integer NOT NULL,
    venta_id integer NOT NULL,
    producto_id integer NOT NULL,
    precio integer NOT NULL,
    cantidad integer NOT NULL,
    total integer NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.detalle_venta OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 53154)
-- Name: detalle_venta_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.detalle_venta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.detalle_venta_id_seq OWNER TO postgres;

--
-- TOC entry 2873 (class 0 OID 0)
-- Dependencies: 210
-- Name: detalle_venta_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.detalle_venta_id_seq OWNED BY public.detalle_venta.id;


--
-- TOC entry 203 (class 1259 OID 53070)
-- Name: migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    migration character varying(255) NOT NULL,
    batch integer NOT NULL
);


ALTER TABLE public.migrations OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 53068)
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.migrations_id_seq OWNER TO postgres;

--
-- TOC entry 2874 (class 0 OID 0)
-- Dependencies: 202
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- TOC entry 207 (class 1259 OID 53135)
-- Name: producto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.producto (
    id integer NOT NULL,
    nombre character varying(128) NOT NULL,
    referencia character varying(128) NOT NULL,
    precio integer NOT NULL,
    peso integer NOT NULL,
    categoria_id integer NOT NULL,
    stock integer NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.producto OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 53133)
-- Name: producto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.producto_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.producto_id_seq OWNER TO postgres;

--
-- TOC entry 2875 (class 0 OID 0)
-- Dependencies: 206
-- Name: producto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.producto_id_seq OWNED BY public.producto.id;


--
-- TOC entry 209 (class 1259 OID 53148)
-- Name: venta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.venta (
    id integer NOT NULL,
    fecha_creacion date NOT NULL,
    total integer NOT NULL
);


ALTER TABLE public.venta OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 53146)
-- Name: venta_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.venta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.venta_id_seq OWNER TO postgres;

--
-- TOC entry 2876 (class 0 OID 0)
-- Dependencies: 208
-- Name: venta_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.venta_id_seq OWNED BY public.venta.id;


--
-- TOC entry 2712 (class 2604 OID 53130)
-- Name: categoria id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria ALTER COLUMN id SET DEFAULT nextval('public.categoria_id_seq'::regclass);


--
-- TOC entry 2715 (class 2604 OID 53159)
-- Name: detalle_venta id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_venta ALTER COLUMN id SET DEFAULT nextval('public.detalle_venta_id_seq'::regclass);


--
-- TOC entry 2711 (class 2604 OID 53073)
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- TOC entry 2713 (class 2604 OID 53138)
-- Name: producto id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto ALTER COLUMN id SET DEFAULT nextval('public.producto_id_seq'::regclass);


--
-- TOC entry 2714 (class 2604 OID 53151)
-- Name: venta id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venta ALTER COLUMN id SET DEFAULT nextval('public.venta_id_seq'::regclass);


--
-- TOC entry 2858 (class 0 OID 53127)
-- Dependencies: 205
-- Data for Name: categoria; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.categoria VALUES (1, 'Mercado', NULL, NULL);
INSERT INTO public.categoria VALUES (2, 'Ropa', NULL, NULL);
INSERT INTO public.categoria VALUES (3, 'Tecnología', NULL, NULL);
INSERT INTO public.categoria VALUES (4, 'Mascotas', NULL, NULL);
INSERT INTO public.categoria VALUES (5, 'Ferretería', NULL, NULL);
INSERT INTO public.categoria VALUES (6, 'Iluminación', NULL, NULL);
INSERT INTO public.categoria VALUES (7, 'Construccion', NULL, NULL);
INSERT INTO public.categoria VALUES (8, 'Maquinaria', NULL, NULL);
INSERT INTO public.categoria VALUES (9, 'Muebles', NULL, NULL);


--
-- TOC entry 2864 (class 0 OID 53156)
-- Dependencies: 211
-- Data for Name: detalle_venta; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2856 (class 0 OID 53070)
-- Dependencies: 203
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.migrations VALUES (5, '2024_02_20_022840_create_categoria_table', 1);
INSERT INTO public.migrations VALUES (6, '2024_02_20_022854_create_producto_table', 1);
INSERT INTO public.migrations VALUES (7, '2024_02_20_022902_create_venta_table', 1);
INSERT INTO public.migrations VALUES (8, '2024_02_20_022911_create_detalle_venta_table', 1);


--
-- TOC entry 2860 (class 0 OID 53135)
-- Dependencies: 207
-- Data for Name: producto; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2862 (class 0 OID 53148)
-- Dependencies: 209
-- Data for Name: venta; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2877 (class 0 OID 0)
-- Dependencies: 204
-- Name: categoria_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categoria_id_seq', 9, true);


--
-- TOC entry 2878 (class 0 OID 0)
-- Dependencies: 210
-- Name: detalle_venta_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.detalle_venta_id_seq', 1, false);


--
-- TOC entry 2879 (class 0 OID 0)
-- Dependencies: 202
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.migrations_id_seq', 8, true);


--
-- TOC entry 2880 (class 0 OID 0)
-- Dependencies: 206
-- Name: producto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.producto_id_seq', 1, false);


--
-- TOC entry 2881 (class 0 OID 0)
-- Dependencies: 208
-- Name: venta_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.venta_id_seq', 1, false);


--
-- TOC entry 2719 (class 2606 OID 53132)
-- Name: categoria categoria_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (id);


--
-- TOC entry 2725 (class 2606 OID 53161)
-- Name: detalle_venta detalle_venta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_venta
    ADD CONSTRAINT detalle_venta_pkey PRIMARY KEY (id);


--
-- TOC entry 2717 (class 2606 OID 53075)
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 2721 (class 2606 OID 53140)
-- Name: producto producto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (id);


--
-- TOC entry 2723 (class 2606 OID 53153)
-- Name: venta venta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venta
    ADD CONSTRAINT venta_pkey PRIMARY KEY (id);


--
-- TOC entry 2728 (class 2606 OID 53167)
-- Name: detalle_venta detalle_venta_producto_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_venta
    ADD CONSTRAINT detalle_venta_producto_id_foreign FOREIGN KEY (producto_id) REFERENCES public.producto(id) ON DELETE CASCADE;


--
-- TOC entry 2727 (class 2606 OID 53162)
-- Name: detalle_venta detalle_venta_venta_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_venta
    ADD CONSTRAINT detalle_venta_venta_id_foreign FOREIGN KEY (venta_id) REFERENCES public.venta(id) ON DELETE CASCADE;


--
-- TOC entry 2726 (class 2606 OID 53141)
-- Name: producto producto_categoria_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_categoria_id_foreign FOREIGN KEY (categoria_id) REFERENCES public.categoria(id) ON DELETE CASCADE;


-- Completed on 2024-02-20 05:30:10

--
-- PostgreSQL database dump complete
--

