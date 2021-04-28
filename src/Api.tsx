import React from 'react';

export interface Project {
    title: string,
    location: string,
    date: string | null,
    categories: string[],
    imgSrc: string,
    vidSrc?: string | null,
    appSrc?: string | null,
    description: string,
    extendedInfo?: any
}

export interface CardItem {
    title: string,
    date: string | null,
    categories: string[],
    imgSrc?: string | null,
    vidSrc?: string | null,
    appSrc?: string | null,
    description: string,
    extendedInfo?: any;
}